import { Metadata } from "next";

import PostList from "@/components/posts/post-list";
import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "포스트";
  const url = `${baseUrl}`;

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

export default async function PostsPage() {
  return (
    <div className="container mx-auto max-w-[900px] mt-28 mb-16 flex flex-col p-2 px-6">
      <PostList />
    </div>
  );
}
