import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import useLoadFonts from "../customHooks/useLoadFonts"

const ButtonWhite = ({ children, navigation }) => {
  const fontsLoaded=useLoadFonts()

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        children.toLowerCase() === "login"
          ? navigation.navigate("login")
          : children.toLowerCase() === "signup"
          ? navigation.navigate("signup")
          : false
      }>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "gray",
    fontSize: 16,
    fontFamily: "Roboto", // Fuente genérica
    fontWeight: "bold" // Estilo de fuente normal
  }
})

export default ButtonWhite
