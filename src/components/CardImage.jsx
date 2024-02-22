import React from "react"
import { ImageBackground, View, Text, StyleSheet } from "react-native"
import Svg, { Image } from "react-native-svg" // Importa Svg y Image desde react-native-svg
import useLoadFonts from "../customHooks/useLoadFonts"

const CardImage = () => {
  const fontsLoaded=useLoadFonts()

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/iaphoto.png")}
        style={styles.imageBackground}>
        <View style={styles.content}>
            <Image
              href={require("../../assets/white-logo.png")}
            />
          <Text style={styles.description}>Descripción del Card</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: 500,
    resizeMode: "contain",
    position: "relative"
  },
  content: {
    position: "absolute",
    bottom: -500,
    left: 0,
    padding: 16
  },
  title: {
    fontFamily:"Roboto",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8
  },
  description: {
    color: "white",
    fontSize: 16,
    marginTop: 8
  },

})

export default CardImage
