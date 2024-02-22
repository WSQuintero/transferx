import React, { useContext, useState } from "react"
import ButtonColorNext from "../components/ButtonColorNext"
import { MyContext } from "../context/context"
import PageWrapper from "../components/PageWrapper"
import useLoadFonts from "../customHooks/useLoadFonts"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import stylesBodyTypeView from "../styles/stylesBodyTypeView"
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native"

const BodyTypeSelector = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  const { pageTellMeAboutYou, setPageTellMeAboutYou } = useContext(MyContext)
  const fontsLoaded = useLoadFonts()

  const handleCardPress = (index) => {
    setSelectedCard(index)
  }

  return (
    <PageWrapper>
      <ScrollView contentContainerStyle={stylesBodyTypeView.container}>
        <View style={stylesBodyTypeView.imageContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={stylesBodyTypeView.favicon}
          />
        </View>
        <View style={stylesBodyTypeView.imageContainer}>
          <Image
            source={require("../../assets/iaphoto.png")}
            style={stylesBodyTypeView.image}
          />
        </View>
        <Text style={stylesBodyTypeView.title}>Let's Dive In!</Text>
        <Text style={stylesBodyTypeView.subtitle}>Tell me about you a bit</Text>
        <Text style={stylesBodyTypeView.sectionTitle}>
          What's Your Body Type?
        </Text>
        <TouchableOpacity
          style={[
            stylesBodyTypeView.card,
            selectedCard === 0 && stylesBodyTypeView.selectedCard
          ]}
          onPress={() => handleCardPress(0)}>
          <Text
            style={[
              stylesBodyTypeView.cardText,
              selectedCard === 0 && stylesBodyTypeView.selectedText
            ]}>
            Hourglass - Curvy with balanced hips & shoulders
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesBodyTypeView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesBodyTypeView.card,
            selectedCard === 1 && stylesBodyTypeView.selectedCard
          ]}
          onPress={() => handleCardPress(1)}>
          <Text
            style={[
              stylesBodyTypeView.cardText,
              selectedCard === 1 && stylesBodyTypeView.selectedText
            ]}>
            Pear - Narrow shoulders, wider hips, and fuller thighs.
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesBodyTypeView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesBodyTypeView.card,
            selectedCard === 2 && stylesBodyTypeView.selectedCard
          ]}
          onPress={() => handleCardPress(2)}>
          <Text
            style={[
              stylesBodyTypeView.cardText,
              selectedCard === 2 && stylesBodyTypeView.selectedText
            ]}>
            Apple - Broader midsection, narrower hips, and bust.
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesBodyTypeView.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesBodyTypeView.card,
            selectedCard === 3 && stylesBodyTypeView.selectedCard
          ]}
          onPress={() => handleCardPress(3)}>
          <Text
            style={[
              stylesBodyTypeView.cardText,
              selectedCard === 3 && stylesBodyTypeView.selectedText
            ]}>
            Other - Please describe your body type briefly
          </Text>
          <FontAwesome
            name="chevron-right"
            size={20}
            color="gray"
            style={stylesBodyTypeView.arrowIcon}
          />
        </TouchableOpacity>
        <View style={stylesBodyTypeView.buttonContainer}>
          <ButtonColorNext
            pageTellMeAboutYou={pageTellMeAboutYou}
            setPageTellMeAboutYou={setPageTellMeAboutYou}
            navigation={navigation}
            to={"sectionFour"}>
            Next
          </ButtonColorNext>
        </View>
      </ScrollView>
    </PageWrapper>
  )
}

export default BodyTypeSelector
