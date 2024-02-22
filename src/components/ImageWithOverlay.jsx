import React, { useState } from "react"
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native"
import useLoadFonts from "../customHooks/useLoadFonts"

const ImageWithOverlay = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    require("../../assets/iaphoto.png"),
    require("../../assets/men.png"),
    require("../../assets/women.png"),
  ] // Agrega aquí tus rutas de imágenes adicionales
  const fontsLoaded = useLoadFonts()

  const handleSwipeRight = () => {
    const nextIndex = (currentImageIndex + 1) % images.length
    setCurrentImageIndex(nextIndex)
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleSwipeRight}>
        <View>
          <Image source={images[currentImageIndex]} style={styles.image} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.overlay}>
        <View style={styles.leftContainer}>
          <Image
            source={require("../../assets/white-logo.png")}
            style={styles.smallImage}
          />
          <Text style={styles.title}>LA Style Fashionista</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Discover the epitome of Los Angeles fashion with Mira, your ultimate
            style curator for the city's iconic flair.
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: 480,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 20
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 200,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    flex: 1
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    position: "relative"
  },
  smallImage: {
    width: 80,
    height: 50,
    resizeMode: "cover"
  },
  title: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 20,
    marginBottom: 5,
    bottom: -22
  },
  descriptionContainer: {
    borderTopWidth: 1,
    borderTopColor: "white",
    paddingTop: 10
  },
  description: {
    color: "white",
    fontSize: 14,
    marginTop: 5
  }
})

export default ImageWithOverlay