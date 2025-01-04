import { Metadata } from "next";

import { baseUrl, siteMetadata, siteName } from "@/lib/metadata";
import RecentPost from "@/components/home/recent-post";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${baseUrl}`;

  return {
    title: `${siteName}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: `${siteName}`,
      url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: `${siteName}`,
    },
  };
}

export default async function Home() {

  const categories = [{ name: '🔖 전체', count: 10 }, { name: '💻 개발', count: 6 }, { name: '🏖️ 여행', count: 3 }, { name: '💰 투자', count: 1 }];

  return (
    <div className="container mx-auto max-w-[900px] mt-32 mb-16 flex flex-col p-2 px-6">
      <div className="mb-10">
        <ul className="flex gap-2">
          {categories.map((item, index) => (
            <li key={index}>
              <button className="rounded-full px-4 py-2 bg-primary hover:bg-accent focus:bg-accent focus:ring-4 focus:ring-accent font-semibold shadow-lg transition-all duration-200 dark:bg-secondary dark:hover:bg-accent dark:focus:bg-accent dark:focus:ring-4 dark:focus:ring-accent ">
                {item.name} ({item.count})
              </button>
            </li>
          ))}
        </ul>
      </div>
      <RecentPost />
    </div>
  );
}
