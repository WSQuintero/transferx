import { View, Dimensions, ImageBackground } from "react-native";
import React from "react";
import useLoadFonts from "../customHooks/useLoadFonts";

const PageWrapper = ({ children }) => {
  const { width, height } = Dimensions.get("window");
  const fontsLoaded=useLoadFonts()

  return (
    <ImageBackground
    source={require("../../assets/union.png")}
    style={{ flex: 1, height: height, width: width, resizeMode: "cover" }}
    >
      <View style={{ flex: 1, position: "relative" }}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default PageWrapper;

