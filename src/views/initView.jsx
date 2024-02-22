import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import ButtonColor from "../components/ButtonColor"
import ButtonWhite from "../components/ButtonWhite"
import PageWrapper from "../components/PageWrapper"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesInitView from "../styles/stylesInitView"

const InitView = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [title, setTitle] = useState("Elevate Your Vibe, Style-First!")
  const [subtitle, setSubtitle] = useState(
    "Dress to impress effortlessly! Get instant outfit ratings and personalized style tips."
  )
  const options=["Option 1","Option 2","Option 3"]
  const fontsLoaded = useLoadFonts()

  const handleOptionSelect = (option) => {
    setSelectedOption(option)

    switch (option) {
      case "Option 1":
        setTitle("Discover the Magic of Option 1")
        setSubtitle("Unlock new possibilities with Option 1")
        break
      case "Option 2":
        setTitle("Unleash Your Potential with Option 2")
        setSubtitle("Embark on a journey of growth with Option 2")
        break
      case "Option 3":
        setTitle("Elevate Your Experience with Option 3")
        setSubtitle("Experience excellence with Option 3")
        break
      default:
        setTitle("Elevate Your Vibe, Style-First!")
        setSubtitle(
          "Dress to impress effortlessly! Get instant outfit ratings and personalized style tips."
        )
        break
    }
  }

  return (
    <PageWrapper>
      <View style={stylesInitView.container}>
        <Image
          source={require("../../assets/icon.png")}
          style={stylesInitView.icon}
          resizeMode="contain"
        />
        <Text style={stylesInitView.title}>{title}</Text>
        <Text style={stylesInitView.subtitle}>{subtitle}</Text>
        <View style={stylesInitView.optionsContainer}>
          {options.map((option)=>(
                    <TouchableOpacity
                    key={option}
                    style={[
                      stylesInitView.optionButton,
                      selectedOption === option && stylesInitView.selectedOption
                    ]}
                    onPress={() => handleOptionSelect(option)}>
                    <View
                      style={[
                        stylesInitView.optionIndicator,
                        selectedOption === option &&
                          stylesInitView.selectedIndicator
                      ]}
                    />
                  </TouchableOpacity>
          ))}
        </View>
        <View style={stylesInitView.buttonContainer}>
          <ButtonWhite navigation={navigation}>Login</ButtonWhite>
          <ButtonColor navigation={navigation} to={"signup"}>
            SignUp
          </ButtonColor>
        </View>
      </View>
    </PageWrapper>
  )
}

export default InitView
