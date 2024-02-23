import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

export const Theme = extendTheme({
  colors: {
    primary: {
      900: "#081414",
    },
    common: {
      background: "#07140f",
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
