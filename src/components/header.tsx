"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { SiNaver } from "react-icons/si";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypingLogo from "@/components/common/typing-logo";

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navigation = [{ name: "소개", href: "/about" }];

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full w-full bg-background border-b shadow-sm dark:shadow-gray-800/50">
        <div className="flex h-14 items-center justify-between px-3">
          <Link
            href="/"
            className="ml-2 flex items-center text-lg font-bold"
            aria-label="홈으로 이동"
          >
            <TypingLogo />
          </Link>
          <nav>
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-2 py-1 md:px-3 md:py-2 text-sm transition-colors",
                      pathname === item.href ? "font-semibold" : ""
                    )}
                    aria-label={`${item.name} 페이지로 이동`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="border-l ml-1 p-1 pl-3 md:p-2 md:pl-5 rounded-md relative group inline-block">
                <Link
                  href="https://github.com/CHOISUJIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub 프로필"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FaGithub size={19} />
                </Link>
                <div className="absolute transform -translate-x-4 -translate-y-full mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white dark:text-gray-700 dark:bg-gray-300 text-sm px-2 py-1 rounded whitespace-nowrap">
                  GitHub
                </div>
              </li>
              <li className="rounded-md p-1 md:p-2 relative group inline-block">
                <Link
                  href="https://www.linkedin.com/in/sooooooo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn 프로필"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FaLinkedin size={19} />
                </Link>
                <div className="absolute transform -translate-x-5 -translate-y-full mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white dark:text-gray-700 dark:bg-gray-300 text-sm px-2 py-1 rounded whitespace-nowrap">
                  LinkedIn
                </div>
              </li>
              <li className="rounded-md p-1 md:p-2 relative group inline-block">
                <Link
                  href="https://blog.naver.com/g9marble"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="쑤쑤롱의 지구산책 블로그"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <SiNaver size={15} />
                </Link>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white dark:text-gray-700 dark:bg-gray-300 text-sm px-2 py-1 rounded whitespace-nowrap">
                  쑤쑤롱의 지구산책
                </div>
              </li>
              <li>
                <button
                  onClick={handleThemeToggle}
                  className="rounded-md p-1 pt-2 md:p-2 transition-colors text-yellow-400"
                  aria-label={
                    theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
                  }
                >
                  {theme === "dark" ? (
                    <FiSun className="text-warning" size={17} />
                  ) : (
                    <FiMoon className="text-primary" size={19} />
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
