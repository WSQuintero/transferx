import React, { useEffect, useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import PageWrapper from "../components/PageWrapper"
import stylesInitView from "../styles/stylesInitView"

function InitView({ navigation }) {
  const [textButton, setTextButton] = useState("Siguiente")
  const [selectedOption, setSelectedOption] = useState("Option 1")
  const [selectedImage, setSelectedImage] = useState(
    require("../../assets/slider1.png")
  )
  const [title, setTitle] = useState("¡Bienvenido a Transfer X!")
  const [subtitle, setSubtitle] = useState(
    "Convierte al instante tus USDT a Pesos Colombianos a tasas competitivas"
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
        setTitle("Bienvenido a Transfer X")
        setSubtitle(
          "Convierte instantáneamente tus USDT a Pesos Colombianos a tasas competitivas"
        )
        setTextButton("Siguiente")
        break
      case "Option 2":
        setTitle("Características Futuras Esperan")
        setSubtitle(
          "¡Prepárate para una billetera completa, servicios de tarjetas y más, próximamente!"
        )
        setTextButton("Siguiente")
        break
      case "Option 3":
        setTitle("Tu Criptomoneda, Tu Control")
        setSubtitle(
          "Gestiona tus transacciones con transparencia y seguimiento en tiempo real"
        )
        break
    }
  }

  const handleNextButtonClick = () => {
    const currentIndex = options.indexOf(selectedOption)
    if (currentIndex === 1) {
      const nextIndex = (currentIndex + 1) % options.length
      const nextOption = options[nextIndex]
      handleOptionSelect(nextOption)
      setTextButton("Comencemos")
    } else {
      if (textButton === "Comencemos") {
        navigation.navigate("login")
      } else {
        setTextButton("Siguiente")
        const nextIndex = (currentIndex + 1) % options.length
        const nextOption = options[nextIndex]
        handleOptionSelect(nextOption)
      }
    }
  }

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
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
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
