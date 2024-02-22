import React from "react"
import { TouchableOpacity, Text, StyleSheet, to } from "react-native"
import useLoadFonts from "../customHooks/useLoadFonts"

const ButtonColorNext = ({
  children,
  navigation,
  pageTellMeAboutYou,
  setPageTellMeAboutYou,
  to
}) => {
  const fontsLoaded=useLoadFonts()

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
          navigation.navigate(`${to}`)
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
    marginBottom: 10
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto", // Fuente genérica
    fontWeight: "bold" // Estilo de fuente normal
  }
})

export default ButtonColorNext
