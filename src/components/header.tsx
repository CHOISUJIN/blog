"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: "포스트", href: "/posts" },
    { name: "소개", href: "/about" },
  ];

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full w-full bg-background border-b overflow-hidden shadow-sm dark:shadow-gray-800/50">
        <div className="flex h-14 items-center justify-between px-3">
          <Link
            href="/"
            className="ml-2 flex items-center text-lg font-bold"
            aria-label="홈으로 이동"
          >
            <span>🌙🌿🌷💤</span>
            {/* <span className="relative inline-block overflow-hidden group">
              <p className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                
              </p>
              <p className="absolute left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-primary font-bold text-lg">
                  While True,
                </span>
                <span className="text-foreground ml-1">Sleep</span>
              </p>
            </span> */}
          </Link>
          <nav>
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm transition-colors",
                      pathname.startsWith(item.href)
                        ? "text-primary-foreground bg-primary/20 dark:bg-primary/30"
                        : "hover:text-primary dark:hover:text-primary-foreground"
                    )}
                    aria-label={`${item.name} 페이지로 이동`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="border-l">
                <button
                  onClick={handleThemeToggle}
                  className="ml-2 rounded-md p-2 transition-colors text-muted-foreground hover:bg-muted/80 dark:hover:bg-muted/60 dark:text-muted-foreground"
                  aria-label={
                    theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
                  }
                >
                  {theme === "dark" ? (
                    <FiSun className="text-warning" />
                  ) : (
                    <FiMoon className="text-primary" />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
