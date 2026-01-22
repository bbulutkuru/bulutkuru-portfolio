import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-4 md:right-6 z-40 p-3 rounded-full bg-gray-800 dark:bg-gray-800 border-2 border-gray-700 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-blue-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
