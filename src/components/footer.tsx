import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center py-7 gap-3">
      <div className="flex flex-row gap-4">
        <Link
          href="https://github.com/CHOISUJIN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="GitHub 프로필"
        >
          <FaGithub size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sooooooo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="LinkedIn 프로필"
        >
          <FaLinkedin size={20} />
        </Link>
      </div>
      <div
        className="flex justify-center text-center text-sm text-gray-500"
        aria-label={`저작권 ${currentYear} sujin.choi`}
      >
        Copyright © {currentYear} sujin.choi
      </div>
    </footer>
  );
};

export default Footer;
