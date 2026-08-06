import { useState } from "react";
// import { Menu, X, Download } from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-4xl font-extrabold tracking-tight text-indigo-600"
        >
          AK
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative font-medium text-gray-700 transition-colors duration-300 hover:text-indigo-600"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <button className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 md:flex">
          {/* <Download size={18} /> */}
          🔽 Download Resume
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-gray-800 md:hidden"
        >
          {isOpen ? "X" : "="}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-white px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="border-b border-gray-100 py-4 text-lg font-medium text-gray-700 hover:text-indigo-600"
            >
              {link}
            </a>
          ))}

          <button className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-medium text-white">
            {/* <Download size={18} /> */}
            Download Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
