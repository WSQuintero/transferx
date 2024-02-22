import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

export const Theme = extendTheme({
  colors: {
    primary: {
      900: "#2d2ade",
      800: "#2d2ade",
      700: "#2d2ade",
      600: "#2d2ade",
      500: "#2d2ade",
      400: "#2d2ade",
      300: "#2d2ade",
      200: "#2d2ade",
      100: "#2d2ade",
      50: "#2d2ade",
    },
    common: {
      background: "#e6f0fe",
    },
  },
  config: {
    initialColorMode: "light",
  },
  sizes: {
    header: {
      main: 80,
    },
    navigation: {
      main: 64,
      camera: 96,
    },
  },
  shape: {
    header: 16,
    navigation: 16,
  },
});

export const ThemeProvider = ({ children }) => {
  return <NativeBaseProvider theme={Theme}>{children}</NativeBaseProvider>;
};
