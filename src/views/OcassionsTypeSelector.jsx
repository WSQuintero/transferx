import React, { useState } from "react"

import ButtonColorNext from "../components/ButtonColorNext"
import PageWrapper from "../components/PageWrapper"
import useLoadFonts from "../customHooks/useLoadFonts"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import stylesOcassionsView from "../styles/stylesOcassionsView"
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native"

const OcassionsTypeSelector = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  const fontsLoaded = useLoadFonts()

  const handleCardPress = (index) => {
    setSelectedCard(index)
  }

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={stylesOcassionsView.container}>
        <View style={stylesOcassionsView.imageContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={stylesOcassionsView.favicon}
          />
        </View>
        <View style={stylesOcassionsView.imageContainer}>
          <Image
            source={require("../../assets/iaphoto.png")}
            style={stylesOcassionsView.image}
          />
        </View>
        <Text style={stylesOcassionsView.title}>Let's Dive In!</Text>
        <Text style={stylesOcassionsView.subtitle}>
          Tell me about you a bit
        </Text>
        <Text style={stylesOcassionsView.sectionTitle}>Occasions:</Text>
        <TouchableOpacity
          style={[
            stylesOcassionsView.card,
            selectedCard === 0 && stylesOcassionsView.selectedCard
          ]}
          onPress={() => handleCardPress(0)}>
          <Text
            style={[
              stylesOcassionsView.cardText,
              selectedCard === 0 && stylesOcassionsView.selectedText
            ]}>
            Work - "Professional attire suitable for the workplace."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesOcassionsView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesOcassionsView.card,
            selectedCard === 1 && stylesOcassionsView.selectedCard
          ]}
          onPress={() => handleCardPress(1)}>
          <Text
            style={[
              stylesOcassionsView.cardText,
              selectedCard === 1 && stylesOcassionsView.selectedText
            ]}>
            Casual Outings - "Comfortable and stylish for everyday casual
            occasions.
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesOcassionsView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesOcassionsView.card,
            selectedCard === 2 && stylesOcassionsView.selectedCard
          ]}
          onPress={() => handleCardPress(2)}>
          <Text
            style={[
              stylesOcassionsView.cardText,
              selectedCard === 2 && stylesOcassionsView.selectedText
            ]}>
            Parties/Events - "Dressy and eye-catching for social gatherings."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesOcassionsView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesOcassionsView.card,
            selectedCard === 3 && stylesOcassionsView.selectedCard
          ]}
          onPress={() => handleCardPress(3)}>
          <Text
            style={[
              stylesOcassionsView.cardText,
              selectedCard === 3 && stylesOcassionsView.selectedText
            ]}>
            Other (please specify) - "Please mention specific occasions you
            often dress for."
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesOcassionsView.arrowIcon}
          />
        </TouchableOpacity>
        <View style={stylesOcassionsView.buttonContainer}>
          <ButtonColorNext navigation={navigation} to={"sectionSeven"}>
            Next
          </ButtonColorNext>
        </View>
      </ScrollView>
    </PageWrapper>
  )
}

export default OcassionsTypeSelector
