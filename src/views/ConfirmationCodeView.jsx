import React, { useContext, useRef, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesConfrrmationCodeView from "../styles/stylesConfrrmationCodeView"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import ButtonColor from "../components/ButtonColor"
import { MyContext } from "../context/context"
import ModalError from "../components/ModalError"

const ConfirmationCodeView = ({ navigation }) => {
  const [one, setOne] = useState("")
  const [two, setTwo] = useState("")
  const [three, setThree] = useState("")
  const [four, setFour] = useState("")
  const [five, setFive] = useState("")
  const [six, setSix] = useState("")
  const inputOneRef = useRef(null)
  const inputTwoRef = useRef(null)
  const inputThreeRef = useRef(null)
  const inputFourRef = useRef(null)
  const inputFiveRef = useRef(null)
  const inputSixRef = useRef(null)
  const fontsLoaded = useLoadFonts()
  const {
    cellphone,
    $Auth,
    errorMessage,
    setErrorMessage,
    showErrorModal,
    setShowErrorModal
  } = useContext(MyContext)

  const handleBlur = (ref) => {
    ref.current.setNativeProps({
      style: { borderColor: "gray" }
    })
  }

  const handleFocus = (ref) => {
    ref.current.setNativeProps({
      style: { borderColor: "#C3F53C" }
    })
  }

  const handleConfirmateOtp = async () => {
    const { status, data } = await $Auth.confirmCellphone({
      cellphone,
      code: `${one}${two}${three}${four}${five}${six}`
    })

    if (status) {
      navigation.navigate("login")
    } else {
      setErrorMessage("Por favor intenta nuevamente, ha habido un error")
      setShowErrorModal(true)
    }
  }

  const handleResendConfirmateOtp = async () => {
    const { status, data } = await $Auth.resendConfirmationCode({
      cellphone
    })

    console.log(cellphone)
    if (status) {
      console.log("Se envió el código a tu celular")
    } else {
      setErrorMessage("Por favor intenta nuevamente, ha habido un error")
      setShowErrorModal(true)
      console.log(data.data)
    }
  }

  return (
    <PageWrapper>
      {/* <BackButton /> */}
      <View style={stylesConfrrmationCodeView.container}>
        <View style={stylesConfrrmationCodeView.content}>
          <Text style={stylesConfrrmationCodeView.title}>
            Verificación de OTP
          </Text>
          <Text style={stylesConfrrmationCodeView.subtitle}>
            Para registrarte en tu cuenta, ingresa el código de 6 dígitos que te
            enviamos.
            {cellphone}
          </Text>

          <View style={stylesConfrrmationCodeView.inputContainer}>
            <View style={stylesConfrrmationCodeView.textInputContainer}>
              <TextInput
                style={stylesConfrrmationCodeView.textInput}
                onChangeText={(text) => {
                  setOne(text)
                }}
                value={one}
                maxLength={1}
                onFocus={() => handleFocus(inputOneRef)}
                onBlur={() => handleBlur(inputOneRef)}
                ref={inputOneRef}
              />
            </View>
            <View style={stylesConfrrmationCodeView.textInputContainer}>
              <TextInput
                style={stylesConfrrmationCodeView.textInput}
                onChangeText={(text) => {
                  setTwo(text)
                }}
                value={two}
                maxLength={1}
                onFocus={() => handleFocus(inputTwoRef)}
                onBlur={() => handleBlur(inputTwoRef)}
                ref={inputTwoRef}
              />
            </View>
            <View style={stylesConfrrmationCodeView.textInputContainer}>
              <TextInput
                style={stylesConfrrmationCodeView.textInput}
                onChangeText={(text) => {
                  setThree(text)
                }}
                value={three}
                maxLength={1}
                onFocus={() => handleFocus(inputThreeRef)}
                onBlur={() => handleBlur(inputThreeRef)}
                ref={inputThreeRef}
              />
            </View>
            <View style={stylesConfrrmationCodeView.textInputContainer}>
              <TextInput
                style={stylesConfrrmationCodeView.textInput}
                onChangeText={(text) => {
                  setFour(text)
                }}
                value={four}
                maxLength={1}
                onFocus={() => handleFocus(inputFourRef)}
                onBlur={() => handleBlur(inputFourRef)}
                ref={inputFourRef}
              />
            </View>
            <View style={stylesConfrrmationCodeView.textInputContainer}>
              <TextInput
                style={stylesConfrrmationCodeView.textInput}
                onChangeText={(text) => {
                  setFive(text)
                }}
                value={five}
                maxLength={1}
                onFocus={() => handleFocus(inputFiveRef)}
                onBlur={() => handleBlur(inputFiveRef)}
                ref={inputFiveRef}
              />
            </View>
            <View style={stylesConfrrmationCodeView.textInputContainer}>
              <TextInput
                style={stylesConfrrmationCodeView.textInput}
                onChangeText={(text) => {
                  setSix(text)
                }}
                value={six}
                maxLength={1}
                onFocus={() => handleFocus(inputSixRef)}
                onBlur={() => handleBlur(inputSixRef)}
                ref={inputSixRef}
              />
            </View>
          </View>

          <Text
            style={stylesConfrrmationCodeView.signupText}
            onPress={handleResendConfirmateOtp}>
            ¿Aún no has recibido el OTP?
            <Text style={stylesConfrrmationCodeView.signupTextBold}>
              {" "}
              Reenviar OTP
            </Text>
          </Text>
          <View style={stylesConfrrmationCodeView.buttonContainer}>
            <ButtonColor
              navigation={navigation}
              to={"login"}
              handleSignUp={handleConfirmateOtp}>
              Confirmar
            </ButtonColor>
          </View>
        </View>
      </View>
      <ModalError errorMessage={errorMessage} showErrorModal={showErrorModal} />
    </PageWrapper>
  )
}

export default ConfirmationCodeView
