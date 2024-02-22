import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import useLoadFonts from "../customHooks/useLoadFonts"

const ButtonFinish = ({ children, navigation,to }) => {
  const fontsLoaded = useLoadFonts()

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate(to)
      }}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 40,
    backgroundColor: "#2D2ADE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 200
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Roboto", // Fuente genérica
    fontWeight: "bold" // Estilo de fuente normal
  }
})

export default ButtonFinish
