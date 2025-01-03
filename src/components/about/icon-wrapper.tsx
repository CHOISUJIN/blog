export default function IconWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-2 rounded-md hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-200">
      {children}
    </div>
  );
}
