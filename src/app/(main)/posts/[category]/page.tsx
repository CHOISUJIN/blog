import { Metadata } from "next";

import PostList from "@/components/posts/post-list";
import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";

export async function generateMetadata({
  params: { category },
}: PostListPageProps): Promise<Metadata> {
  const categoryName = category;
  const pageTitle = `${categoryName} | Posts`;
  const url = `${baseUrl}/posts/${categoryName}`;

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

type PostListPageProps = {
  params: { category: string };
};

export default async function PostsPage({ params }: PostListPageProps) {
  return (
    <div className="container mx-auto max-w-[900px] mt-24 mb-16 flex flex-col p-2 px-6">
      <PostList category={params.category} />
    </div>
  );
}
