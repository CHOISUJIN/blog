
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center py-7 gap-3">
      <div className="flex flex-row gap-4">

      </div>
      <div
        className="flex justify-center text-center text-sm text-gray-500"
        aria-label={`저작권 ${currentYear} sujin.choi`}
      >
        © {currentYear} Sujin Choi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
