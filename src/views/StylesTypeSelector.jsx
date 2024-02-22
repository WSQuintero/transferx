import React, { useState } from "react"
import ButtonColorNext from "../components/ButtonColorNext"
import PageWrapper from "../components/PageWrapper"
import useLoadFonts from "../customHooks/useLoadFonts"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import stylesTypeSelectorView from "../styles/stylesTypeSelectorView"
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native"

const StylesTypeSelector = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  const fontsLoaded = useLoadFonts()

  const handleCardPress = (index) => {
    setSelectedCard(index)
  }

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={stylesTypeSelectorView.container}>
        <View style={stylesTypeSelectorView.imageContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={stylesTypeSelectorView.favicon}
          />
        </View>
        <View style={stylesTypeSelectorView.imageContainer}>
          <Image
            source={require("../../assets/iaphoto.png")}
            style={stylesTypeSelectorView.image}
          />
        </View>
        <Text style={stylesTypeSelectorView.title}>Let's Dive In!</Text>
        <Text style={stylesTypeSelectorView.subtitle}>
          Tell me about you a bit
        </Text>
        <Text style={stylesTypeSelectorView.sectionTitle}>
          Which Style Speaks to You?
        </Text>
        <TouchableOpacity
          style={[
            stylesTypeSelectorView.card,
            selectedCard === 0 && stylesTypeSelectorView.selectedCard
          ]}
          onPress={() => handleCardPress(0)}>
          <Text
            style={[
              stylesTypeSelectorView.cardText,
              selectedCard === 0 && stylesTypeSelectorView.selectedText
            ]}>
            Casual - "Relaxed and laid-back, perfect for everyday wear."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesTypeSelectorView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesTypeSelectorView.card,
            selectedCard === 1 && stylesTypeSelectorView.selectedCard
          ]}
          onPress={() => handleCardPress(1)}>
          <Text
            style={[
              stylesTypeSelectorView.cardText,
              selectedCard === 1 && stylesTypeSelectorView.selectedText
            ]}>
            Earth Tones (brown, green, beige) - "Nature-inspired hues for a
            grounded look."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesTypeSelectorView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesTypeSelectorView.card,
            selectedCard === 2 && stylesTypeSelectorView.selectedCard
          ]}
          onPress={() => handleCardPress(2)}>
          <Text
            style={[
              stylesTypeSelectorView.cardText,
              selectedCard === 2 && stylesTypeSelectorView.selectedText
            ]}>
            Trendy - "Fashion-forward, keeping up with the latest trends."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesTypeSelectorView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesTypeSelectorView.card,
            selectedCard === 3 && stylesTypeSelectorView.selectedCard
          ]}
          onPress={() => handleCardPress(3)}>
          <Text
            style={[
              stylesTypeSelectorView.cardText,
              selectedCard === 3 && stylesTypeSelectorView.selectedText
            ]}>
            Classic - "Timeless and elegant, enduring fashion staples."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesTypeSelectorView.arrowIcon}
          />
        </TouchableOpacity>
        <View style={stylesTypeSelectorView.buttonContainer}>
          <ButtonColorNext navigation={navigation} to={"sectionSix"}>
            Next
          </ButtonColorNext>
        </View>
      </ScrollView>
    </PageWrapper>
  )
}

export default StylesTypeSelector
