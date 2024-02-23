import React, { useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Button } from "native-base"
import PageWrapper from "../components/PageWrapper"
import stylesInitView from "../styles/stylesInitView"

const InitView = ({ navigation }) => {
  const [textButton, setTextButton] = useState("Next")
  const [selectedOption, setSelectedOption] = useState("Option 1")
  const [selectedImage, setSelectedImage] = useState(
    require("../../assets/slider1.png")
  )
  const [title, setTitle] = useState("Welcome to Transfer X")
  const [subtitle, setSubtitle] = useState(
    "Instantly convert your USDT to Colombian Pesos at competitive rates"
  )
  const options = ["Option 1", "Option 2", "Option 3"]

  const imageMap = {
    "Option 1": require("../../assets/slider1.png"),
    "Option 2": require("../../assets/slider2.png"),
    "Option 3": require("../../assets/slider3.png")
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setSelectedImage(imageMap[option])

    switch (option) {
      case "Option 1":
        setTitle("Welcome to Transfer X")
        setSubtitle(
          "Instantly convert your USDT to Colombian Pesos at competitive rates"
        )
        setTextButton("Next")
        break
      case "Option 2":
        setTitle("Future Features Await")
        setSubtitle(
          "Get ready for a full-featured wallet, card services, and more - coming soon!"
        )
        setTextButton("Next")
        break
      case "Option 3":
        setTitle("Your Crypto, Your Control")
        setSubtitle(
          "Manage your transactions with transparency and real-time tracking"
        )
        break
      default:
        setTitle("Elevate Your Vibe, Style-First!")
        setSubtitle(
          "Dress to impress effortlessly! Get instant outfit ratings and personalized style tips."
        )
        break
    }
  }

  const handleNextButtonClick = () => {
    // Aquí puedes implementar la lógica para avanzar a la siguiente opción
    // por ejemplo, si deseas pasar a la siguiente opción después de presionar el botón "Next"
    // podrías encontrar el índice de la opción actual y luego seleccionar la siguiente opción
    const currentIndex = options.indexOf(selectedOption)
    if (currentIndex === 1) {
      const nextIndex = (currentIndex + 1) % options.length
      const nextOption = options[nextIndex]
      handleOptionSelect(nextOption)
      setTextButton("Get Started")
    } else {
      if (textButton === "Get Started") {
        navigation.navigate("login")
      } else {
        setTextButton("Next")
        const nextIndex = (currentIndex + 1) % options.length
        const nextOption = options[nextIndex]
        handleOptionSelect(nextOption)
      }
    }
  }

  // useEffect(()=>{
  // },[textButton])

  return (
    <PageWrapper>
      <Image
        source={selectedImage}
        style={{ width: "100%", height: "48%", objectFit: "cover" }}
      />

      <View style={stylesInitView.container}>
        <Text style={stylesInitView.title}>{title}</Text>
        <Text style={stylesInitView.subtitle}>{subtitle}</Text>

        <View style={stylesInitView.buttonContainer}>
          <View style={stylesInitView.optionsContainer}>
            {options.map((option) => (
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
          <Button
            style={{
              width: 350,
              height: 50,
              backgroundColor: "#C3F53C",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
              color: "#05000F"
            }}
            onPress={handleNextButtonClick}>
            <Text style={{ color: "#000000" }}>{textButton}</Text>
          </Button>
        </View>
        <TouchableOpacity onPress={() => console.log("Skip clickeado")}>
          <Text
            style={{
              marginTop: 10,
              color: "#C3F53C",
              padding: 10,
              borderRadius: 5
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </PageWrapper>
  )
}

export default InitView
