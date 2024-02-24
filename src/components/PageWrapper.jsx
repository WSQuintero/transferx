import { View, Dimensions, ImageBackground, Image } from "react-native";
import React from "react";
import useLoadFonts from "../customHooks/useLoadFonts";

const PageWrapper = ({ children }) => {
  const { width, height } = Dimensions.get("window");
  const fontsLoaded=useLoadFonts()

  return (

      <View style={{ flex: 1, position: "relative" }}>
<Image
  source={require("../../assets/squad.png")}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "30%",
    resizeMode: "contain",
  }}
/>
      <Image source={require("../../assets/Polygon 2.png") } style={{position:"absolute",top:0,left:0}}></Image>
      <Image source={require("../../assets/Polygon 3.png") } style={{position:"absolute",bottom:0,right:0}}></Image>
        {children}
      </View>

  );
};

export default PageWrapper;

