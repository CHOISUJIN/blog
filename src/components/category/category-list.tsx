import { CategoryDetail } from "@/lib/types";
import CategoryButton from "@/components/category/category-button";

interface CategoryListProps {
  categoryList: CategoryDetail[];
  allPostCount: number;
  currentCategory?: string;
}
export default function CategoryList({
  categoryList,
  allPostCount,
  currentCategory = "all",
}: CategoryListProps) {
  return (
    <div className="mb-7">
      <ul className="flex gap-2">
        <CategoryButton
          href="/posts"
          displayName="🔖 전체"
          count={allPostCount}
          isCurrent={currentCategory === "all"}
        />

        {categoryList.map((item, index) => (
          <CategoryButton
            key={index}
            href={`/posts/${item.dirName}`}
            displayName={item.name}
            count={item.count}
            isCurrent={item.dirName === currentCategory}
          />
        ))}
      </ul>
    </div>
  );
}
