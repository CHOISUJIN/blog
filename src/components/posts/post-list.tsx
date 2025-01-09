import {
  getDescSortedPostList,
  getCategoryDetailList,
  getAllPostCount,
} from "@/lib/post";
import PostCard from "@/components/common/post-card";
import CategoryList from "@/components/category/category-list";

interface PostListProps {
  category?: string;
}

export default async function PostList({ category }: PostListProps) {
  const categoryList = await getCategoryDetailList();
  const postlist = await getDescSortedPostList(category);
  const allPostCount = await getAllPostCount();

  return (
    <div className="flex flex-col gap-4">
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <div className="flex flex-col gap-6">
        {postlist.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
