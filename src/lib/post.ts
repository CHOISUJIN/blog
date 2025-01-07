import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";

import {
  HeadingItem,
  Post,
  PostMatter,
  PostMatterWithContent,
  CategoryDetail,
} from "./types";

const BASE_PATH = "src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = async (postPath: string): Promise<Post> => {
  const postMatterWithContent = await parsePostMatterWithContent(postPath);

  const normalizedPath = postPath.split(path.sep).join("/");
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");

  const [categoryDirName, slug] = filePath.split("/");
  const categoryName = getCategoryName(categoryDirName);

  return {
    categoryDirName,
    categoryName,
    slug,
    ...postMatterWithContent,
  };
};

const parsePostMatterWithContent = async (
  postPath: string
): Promise<PostMatterWithContent> => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  return { ...(data as PostMatter), content };
};

export const getPostPaths = (category?: string): string[] => {
  const folder = category || "**";
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return postPaths;
};

export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );
  return postList;
};

export const getDescSortedPostList = async (
  category?: string
): Promise<Post[]> => {
  const postList = await getPostList(category);
  return postList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getPost = async (slug: string): Promise<Post> => {
  const postPath = `${POSTS_PATH}/${slug}.mdx`;
  const post = await parsePost(postPath);
  return post;
};

export const getAllTags = async (): Promise<string[]> => {
  const postList = await getPostList();
  const tags = postList.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
};

export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace("##", "").replace("#", ""),
      link:
        "#" +
        heading
          .replace("# ", "")
          .replace("#", "")
          .replace(/[\[\]:!@#$/%^&*()+=,.';]/g, "")
          .replace(/ /g, "-")
          .toLowerCase()
          .replace("?", ""),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  );
};

export const getAllPostCount = async () => (await getPostList()).length;

export const getCategoryDetailList = async () => {
  const postList = await getPostList();
  const result: { [key: string]: number } = {};
  for (const post of postList) {
    const category = post.categoryDirName;
    result[category] = (result[category] || 0) + 1;
  }

  const detailList: CategoryDetail[] = Object.entries(result).map(
    ([category, count]) => ({
      dirName: category,
      name: getCategoryName(category),
      count,
    })
  );
  return detailList;
};

export const getCategoryName = (categoryDirName: string): string => {
  const categoryDirNameMap: Record<string, string> = {
    dev: "💻 개발",
    travel: "🏖️ 여행",
    invest: "💰 투자",
  };

  return categoryDirNameMap[categoryDirName] || categoryDirName;
};
