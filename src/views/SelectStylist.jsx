import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesSelectStylistView from "../styles/stylesSelectStylistView"

const SelectStylist = ({ navigation }) => {
  const fontsLoaded = useLoadFonts()

  return (
    <View style={stylesSelectStylistView.container}>
      <View style={stylesSelectStylistView.logoContainer}>
        <Text style={stylesSelectStylistView.logoText}>Mira</Text>
      </View>

      <View style={stylesSelectStylistView.imageContainer}>
        <Image
          source={require("../../assets/iaphoto.png")}
          style={stylesSelectStylistView.image}
        />
        <Text style={stylesSelectStylistView.title}>Mira</Text>
        <Text style={stylesSelectStylistView.text}>LA Style Fashionista</Text>
        <View style={stylesSelectStylistView.line} />
        <Text style={stylesSelectStylistView.description}>
          Discover the epitome of Los Angeles fashion with Mira, your ultimate
          style curator for the city's iconic flair.
        </Text>
        <Text style={stylesSelectStylistView.sliderTitle}>
          Selecting Your Stylist
        </Text>
        <Text style={stylesSelectStylistView.sliderText}>
          Choose the Stylist who resonates with your vibe & preferences.
        </Text>
        <TouchableOpacity style={stylesSelectStylistView.button}>
          <Text style={stylesSelectStylistView.buttonText}>Begin</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectStylist
