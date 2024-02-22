import React, { useState } from "react"
import ButtonColorNext from "../components/ButtonColorNext"
import PageWrapper from "../components/PageWrapper"
import useLoadFonts from "../customHooks/useLoadFonts"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import stylesEyesTypeView from "../styles/stylesEyesTypeView"
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native"


const EyesTypeSelector = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  const fontsLoaded = useLoadFonts()

  const handleCardPress = (index) => {
    setSelectedCard(index)
  }

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={stylesEyesTypeView.container}>
        <View style={stylesEyesTypeView.imageContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={stylesEyesTypeView.favicon}
          />
        </View>
        <View style={stylesEyesTypeView.imageContainer}>
          <Image
            source={require("../../assets/iaphoto.png")}
            style={stylesEyesTypeView.image}
          />
        </View>
        <Text style={stylesEyesTypeView.title}>Let's Dive In!</Text>
        <Text style={stylesEyesTypeView.subtitle}>Tell me about you a bit</Text>
        <Text style={stylesEyesTypeView.sectionTitle}>
          What Colors Catch Your Eye?
        </Text>
        <TouchableOpacity
          style={[
            stylesEyesTypeView.card,
            selectedCard === 0 && stylesEyesTypeView.selectedCard
          ]}
          onPress={() => handleCardPress(0)}>
          <Text
            style={[
              stylesEyesTypeView.cardText,
              selectedCard === 0 && stylesEyesTypeView.selectedText
            ]}>
            Neutrals (black, white, gray) - "Versatile and timeless color
            palette."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesEyesTypeView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesEyesTypeView.card,
            selectedCard === 1 && stylesEyesTypeView.selectedCard
          ]}
          onPress={() => handleCardPress(1)}>
          <Text
            style={[
              stylesEyesTypeView.cardText,
              selectedCard === 1 && stylesEyesTypeView.selectedText
            ]}>
            Earth Tones (brown, green, beige) - "Nature-inspired hues for a
            grounded look."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesEyesTypeView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesEyesTypeView.card,
            selectedCard === 2 && stylesEyesTypeView.selectedCard
          ]}
          onPress={() => handleCardPress(2)}>
          <Text
            style={[
              stylesEyesTypeView.cardText,
              selectedCard === 2 && stylesEyesTypeView.selectedText
            ]}>
            Pastels - "Soft and light shades, creating a delicate appearance."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesEyesTypeView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesEyesTypeView.card,
            selectedCard === 3 && stylesEyesTypeView.selectedCard
          ]}
          onPress={() => handleCardPress(3)}>
          <Text
            style={[
              stylesEyesTypeView.cardText,
              selectedCard === 3 && stylesEyesTypeView.selectedText
            ]}>
            Bold Colors (red, blue, yellow) - "Vibrant and striking shades for a
            bold statement."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesEyesTypeView.arrowIcon}
          />
        </TouchableOpacity>
        <View style={stylesEyesTypeView.buttonContainer}>
          <ButtonColorNext navigation={navigation} to={"sectionFive"}>
            Next
          </ButtonColorNext>
        </View>
      </ScrollView>
    </PageWrapper>
  )
}

export default EyesTypeSelector
