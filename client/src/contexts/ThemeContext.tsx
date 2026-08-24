import React, { createContext, useContext, useEffect, useState } from "react";
import { resolveInitialTheme, type ThemePreference } from "../lib/theme";

type Theme = ThemePreference;

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

function getInitialTheme(defaultTheme: Theme): Theme {
  if (typeof window === "undefined") return defaultTheme;
  const stored = window.localStorage.getItem("axora-theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  return resolveInitialTheme(stored, prefersDark, defaultTheme);
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() =>
    switchable ? getInitialTheme(defaultTheme) : defaultTheme,
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    if (switchable) {
      window.localStorage.setItem("axora-theme", theme);
    }
  }, [theme, switchable]);

  const toggleTheme = switchable
    ? () => setTheme((previous) => (previous === "light" ? "dark" : "light"))
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
