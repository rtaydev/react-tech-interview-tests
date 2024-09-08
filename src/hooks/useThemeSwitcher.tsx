import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import Button from "../components/Button";

interface ThemeSwitchProps {
  children: React.ReactNode;
}

type ThemeType = { [key: string]: string };

interface ThemeSwitchContextProps {
  colorMode: "light" | "dark";
  toggleTheme: () => void;
  currentTheme: ThemeType;
}

const theme = {
  light: {
    color: "black",
    backgroundColor: "white",
  },
  dark: {
    color: "white",
    backgroundColor: "black",
  },
};

const initialTheme = "light";

const ThemeSwitchContext = createContext<ThemeSwitchContextProps>(
  {} as ThemeSwitchContextProps,
);

const ThemeSwitchProvider: FC<ThemeSwitchProps> = ({ children }) => {
  const [colorMode, setColorMode] = useState<"light" | "dark">(initialTheme);

  const toggleTheme = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const currentTheme = theme[colorMode];

  return (
    <ThemeSwitchContext.Provider
      value={{ colorMode, toggleTheme, currentTheme }}
    >
      {children}
    </ThemeSwitchContext.Provider>
  );
};

const useThemeSwitcher = () =>
  useContext<ThemeSwitchContextProps>(ThemeSwitchContext);

export { ThemeSwitchProvider, useThemeSwitcher };
