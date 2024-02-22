import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import useLoadFonts from "../customHooks/useLoadFonts"

const ButtonColor = ({ children, navigation, to }) => {
  const fontsLoaded=useLoadFonts()

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(`${to}`)}>
      <Text
        style={styles.buttonText}
        >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 320,
    height: 50,
    backgroundColor: "#2D2ADE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    zIndex:1060
  }
})

export default ButtonColor
