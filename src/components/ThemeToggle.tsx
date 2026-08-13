import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-16 items-center rounded-full border border-border bg-surface p-1 transition-colors duration-300"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-transform duration-300 ${
          darkMode ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <Moon size={15} />
        ) : (
          <Sun size={15} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;