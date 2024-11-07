import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="p-2 rounded">
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};
export default ThemeToggle;
