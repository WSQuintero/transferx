import React from "react"
import { View, Text, Image } from "react-native"
import ButtonFinish from "../components/ButtonFinish"
import PageWrapper from "../components/PageWrapper"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesCongratulationsView from "../styles/stylesCongratulationsView"

const Congratulations = ({ navigation }) => {
  const fontsLoaded = useLoadFonts()

  return (
    <PageWrapper>
      <View style={stylesCongratulationsView.container}>
        <View style={stylesCongratulationsView.imageContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={stylesCongratulationsView.favicon}
          />
        </View>
        <Image
          source={require("../../assets/congratulations.png")}
          style={stylesCongratulationsView.imageStyle}
        />
        <Text style={stylesCongratulationsView.title}>Congratulations!</Text>
        <Text style={stylesCongratulationsView.subtitle}>
          Get Ready for a Personalized Fashion Journey with MIRA!
        </Text>
        <ButtonFinish navigation={navigation} to={"sectionEight"}>
          Finish
        </ButtonFinish>
      </View>
    </PageWrapper>
  )
}

export default Congratulations
