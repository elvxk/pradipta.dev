import { useEffect, useState } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeSwitcher = (props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme); // Simpan ke localStorage
      }
      return newTheme;
    });
  };

  useEffect(() => {
    // Aplikasi tema ke HTML <document> saat `theme` berubah
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <button
      aria-label="Sun x Moon"
      onClick={toggleTheme}
      className={props.className}
      // className="text-cdark dark:text-cwhite hover:rotate-19 hover:bg-cpink p-2 rounded-full"
    >
      {theme === "light" ? <BsMoonStarsFill /> : <BsSunFill />}
    </button>
  );
};
export default ThemeSwitcher;
