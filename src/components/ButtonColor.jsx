import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import useLoadFonts from "../customHooks/useLoadFonts"

const ButtonColor = ({ children, handleSignUp, width = 350 }) => {
  const fontsLoaded = useLoadFonts()

  return (
    <TouchableOpacity style={[styles.button, { width }]} onPress={handleSignUp}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#C3F53C",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "#05000F",
    fontSize: 14,
    fontFamily: "Roboto",
    zIndex: 1060,
    fontWeight: "bold"
  }
})

export default ButtonColor
