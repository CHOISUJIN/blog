export default function SkillText({ text }: { text: string }) {
  return (
    <div className="rounded-md px-2.5 py-1 text-xs transition-colors text-nowrap bg-gray-100 hover:bg-gray-200 dark:bg-gray-300 dark:hover:bg-gray-400">
      {text}
    </div>
  );
}
