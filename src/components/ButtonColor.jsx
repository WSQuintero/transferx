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
    width: 350,
    height: 50,
    backgroundColor: "#C3F53C",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "#05000F",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Roboto",
    zIndex:1060
  }
})

export default ButtonColor
