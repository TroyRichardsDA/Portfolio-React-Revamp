import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

const dark = {
  color: "rgb(230, 230, 230)",
  backgroundColor: "black",
};

const light = {
  color: "black",
  backgroundColor: "rgb(230, 230, 230)",
};

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(dark);
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    if (!isDark) {
      setTheme(dark);
      setIsDark(true);
      document.body.classList += " dark";
    } else {
      setTheme(light);
      setIsDark(false);
      document.body.classList.remove("dark");
    }
  }

  const values = {
    theme,
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
