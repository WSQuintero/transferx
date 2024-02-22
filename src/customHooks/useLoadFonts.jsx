import * as Font from "expo-font";
import { useEffect, useState } from "react";

function useLoadFonts() {
const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const useLoadFonts = async () => {
      await Font.loadAsync({
        "Poppins-Bold": require("../../assets/fonts/Poppins/Poppins-Bold.ttf"),
        "Poppins-Light": require("../../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
        "Poppins-Medium": require("../../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf")
      });
      setFontsLoaded(true);
    };

    if (!fontsLoaded) {
      useLoadFonts();
    }
  }, [fontsLoaded]);
  return fontsLoaded
}

export default useLoadFonts