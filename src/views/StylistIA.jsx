import React from "react"
import PageWrapper from "../components/PageWrapper"
import ImageWithOverlay from "../components/ImageWithOverlay"
import ButtonColor from "../components/ButtonColor"
import SliderWithArrows from "../components/SliderWithArrows" // Importa el componente SliderWithArrows
import useLoadFonts from "../customHooks/useLoadFonts"
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native"
import stylesStylistIa from "../styles/stylesStylistIa"


const StylistIA = ({ navigation }) => {
  const fontsLoaded = useLoadFonts()

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={stylesStylistIa.container}>
        <View style={stylesStylistIa.imageContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={stylesStylistIa.favicon}
          />
        </View>
        <ImageWithOverlay />

        <SliderWithArrows />
        <View>
          <Text style={stylesStylistIa.subtitle}>Selecting Your Stylist</Text>
        </View>
        <Text style={stylesStylistIa.parraf}>
          Choose the Stylist who resonates with your vibe & preferences.
        </Text>
        <View style={stylesStylistIa.buttonContainer}>
          <ButtonColor navigation={navigation} to={"sectionThree"}>
            Begin
          </ButtonColor>
        </View>
      </ScrollView>
    </PageWrapper>
  )
}

export default StylistIA
