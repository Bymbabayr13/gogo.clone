import { useEffect, useState } from "react";
import { Sun } from "./icons/sun";
import { LuMoonStar } from "react-icons/lu";

export function ThemeMode() {
  const [theme, setTheme] = useState("light");
  function click() {
    if (theme == "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
    document.documentElement.classList.add(theme);
  });

  return (
    <div onClick={click}>
      {theme === "light" && <Sun />}
      {theme === "dark" && (
        <div className="pt-1">
          <LuMoonStar />
        </div>
      )}
    </div>
  );
}
