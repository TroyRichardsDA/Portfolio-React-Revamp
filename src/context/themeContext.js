import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    if (!isDark) {
      setIsDark(true);
      document.body.classList += " dark";
    } else {
      setIsDark(false);
      document.body.classList.remove("dark");
    }
  }

  const values = {
    // theme,
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
