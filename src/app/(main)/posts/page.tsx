import { Metadata } from "next";

import PostList from "@/components/posts/post-list";
import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Posts";
  const url = `${baseUrl}/posts`;

  return {
    title: `${pageTitle} | ${siteName}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: pageTitle,
      url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: pageTitle,
    },
  };
}

const categories = [
  { name: "🔖 전체", count: 10 },
  { name: "💻 개발", count: 6 },
  { name: "🏖️ 여행", count: 3 },
  { name: "💰 투자", count: 1 },
];

export default async function PostsPage() {
  return (
    <div className="container mx-auto max-w-[900px] mt-24 mb-16 flex flex-col p-2 px-6">
      <div className="mb-10">
        <ul className="flex gap-2">
          {categories.map((item, index) => (
            <li key={index}>
              <button className="rounded-full text-sm px-4 py-2 bg-primary hover:bg-accent focus:bg-accent focus:ring-accent focus:font-semibold shadow-lg transition-all duration-200 dark:bg-secondary dark:hover:bg-accent dark:focus:bg-accent dark:focus:ring-accent ">
                {item.name} ({item.count})
              </button>
            </li>
          ))}
        </ul>
      </div>
      <PostList />
    </div>
  );
}
