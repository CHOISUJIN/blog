import Link from "next/link";
import dayjs from "dayjs";

import { Post } from "@/lib/types";
import { FixedSizeImgWithPlaceholder } from "@/components/fixed-size-img-with-placeholder";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link key={post.slug} href={`/${post.slug}`}>
      <article className="w-full flex flex-col sm:flex-row gap-6 md:gap-10 transition-all group border rounded-lg bg-muted/80 dark:bg-muted/60 p-6 hover:scale-105 hover:bg-muted dark:hover:bg-muted">
        {/* 텍스트 섹션 */}
        <div className="flex flex-col flex-1 order-2 sm:order-1">
          <h2 className="text-xl md:text-2xl font-bold text-foreground transition-colors duration-300">
            {post.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-6">
            {post.desc}
          </p>
          <time className="mt-4 text-xs text-muted-foreground/70">
            {dayjs(post.date).locale("ko").format("YYYY년 MM월 DD일")}
          </time>
        </div>

        {/* 이미지 섹션 */}
        <div className="w-full sm:w-[300px] shrink-0 order-1 sm:order-2">
          <FixedSizeImgWithPlaceholder
            className="w-full aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 border dark:border-none"
            src={post.thumbnail}
            alt={post.title}
            width={280}
            height={158}
            priority={false}
          />
        </div>
      </article>
    </Link>
  );
}
