import Link from "next/link";

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

export default function CategoryButton({
  isCurrent,
  displayName,
  href,
  count,
}: Props) {
  return (
    <li>
      <button
        className={`rounded-full text-sm px-4 py-2 bg-primary hover:bg-accent shadow-lg transition-all duration-200 dark:bg-secondary dark:hover:bg-accent ${
          isCurrent
            ? "bg-accent ring-accent font-semibold dark:bg-accent dark:ring-accent dark:font-semibold"
            : ""
        }`}
      >
        <Link href={href}>
          {displayName} ({count})
        </Link>
      </button>
    </li>
  );
}
