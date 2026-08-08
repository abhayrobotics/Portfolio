import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

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
    <header className="fixed top-0 left-0 z-50 w-full border-b border-outline  backdrop-blur-md bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-4xl text-primary font-extrabold tracking-tight text-content"
        >
          AK
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative font-medium text-content transition-colors duration-300 pb-1 hover:text-primary hover:border-b-3 hover:border-b-primary"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <button className="hidden items-center gap-2 rounded-xl bg-primary px-6 py-3  font-medium text-white transition hover:bg-primary md:flex">
          {/* <Download size={18} /> */}
          <Download size={20}/> Download Resume
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-gray-800 md:hidden"
        >
          {isOpen ? <X />: <Menu />}
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
              className="border border-b border-gray-100 px-2  border-l-5 border-l-background  hover:border-l-primary my-2 py-2 text-lg font-medium text-content hover:text-primary"
            >
              {link}
            </a>
          ))}

          <button className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-medium text-white">
            {/* <Download size={18} /> */}
            Download Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
