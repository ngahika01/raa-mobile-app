import { DarkTheme, DefaultTheme } from "react-native-paper";

const theme = {
  dark: false,
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffffff",
    accent: "#2BC990",
    background: "#0A0171",
    surface: "#FFFFFF",
    placeholder: "#f0f0f5",
    text: "#ffffff",
    warning: "#ffcc00",
    error: "#ff0000",
    success: "#00ff00",

  },
  animation: {
    scale: 1.0,
  },
};

export { theme };
