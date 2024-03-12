import React, { useContext, useRef, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesConfrrmationCodeView from "../styles/stylesConfrrmationCodeView"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Clipboard,
  ActivityIndicator
} from "react-native"
import ButtonColor from "../components/ButtonColor"
import { MyContext } from "../context/context"
import ModalError from "../components/ModalError"
import ModalSuccess from "../components/ModalSuccess"
import ButtonColorTwo from "../components/ButtonColorTwo"

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
    showErrorModal
  } = useContext(MyContext)

  const [clipboardContent, setClipboardContent] = useState("")
  const [succesMessage, setSuccesMessage] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [sending, setSending] = useState(false);


  const handlePaste = (event) => {
    Clipboard.getString()
      .then((content) => {
        setOne(content.charAt(0) || "")
        setTwo(content.charAt(1) || "")
        setThree(content.charAt(2) || "")
        setFour(content.charAt(3) || "")
        setFive(content.charAt(4) || "")
        setSix(content.charAt(5) || "")
      })
      .catch((error) => {
        console.error("Error al pegar desde el portapapeles:", error)
      })
  }

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
    setSending(true);

    const { status, data } = await $Auth.confirmCellphone({
      cellphone,
      code: `${one}${two}${three}${four}${five}${six}`
    })

    setSending(false);

    if (status) {
      setSuccesMessage("Tu número de teléfono ha sido validado correctamente");
      setShowSuccessModal(true);
    } else {
      setErrorMessage("Por favor intenta nuevamente, ha habido un error")
      setShowErrorModal(true)
    }
  }

  // const handleResendConfirmateOtp = async () => {
  //   const { status, data } = await $Auth.resendConfirmationCode({
  //     cellphone
  //   })

  //   if (status) {
  //     console.log("Se envió el código a tu celular")
  //   } else {
  //     setErrorMessage("Por favor intenta nuevamente, ha habido un error")
  //     setShowErrorModal(true)
  //     console.log(data.data)
  //   }
  // }

  const focusInput1 = () => {
    if (inputOneRef.current) {
      inputOneRef.current.focus()
    }
  }

  const focusInput2 = () => {
    if (inputTwoRef.current) {
      inputTwoRef.current.focus()
    }
  }

  const focusInput3 = () => {
    if (inputThreeRef.current) {
      inputThreeRef.current.focus()
    }
  }

  const focusInput4 = () => {
    if (inputFourRef.current) {
      inputFourRef.current.focus()
    }
  }
  const focusInput5 = () => {
    if (inputFiveRef.current) {
      inputFiveRef.current.focus()
    }
  }

  const focusInput6 = () => {
    if (inputSixRef.current) {
      inputSixRef.current.focus()
    }
  }
  return (
    <PageWrapper>
      {/* <BackButton /> */}
      <View style={stylesConfrrmationCodeView.container}>
        {
          !sending ?
          (<View style={stylesConfrrmationCodeView.content}>
            <Text style={stylesConfrrmationCodeView.title}>
              Verificación de OTP
            </Text>
            <Text style={stylesConfrrmationCodeView.subtitle}>
              Para registrarte en tu cuenta, ingresa el código de 6 dígitos que te
              enviamos al {cellphone}.
            </Text>

            <View style={stylesConfrrmationCodeView.inputContainer}>
              <View style={stylesConfrrmationCodeView.textInputContainer}>
                <TextInput
                  style={stylesConfrrmationCodeView.textInput}
                  onChangeText={(text) => {
                    setOne(text)
                    focusInput2()
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
                    focusInput3()
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
                    focusInput4()
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
                    focusInput5()
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
                    focusInput6()
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
                    focusInput1()
                  }}
                  value={six}
                  maxLength={1}
                  onFocus={() => handleFocus(inputSixRef)}
                  onBlur={() => handleBlur(inputSixRef)}
                  ref={inputSixRef}
                />
              </View>
            </View>

            {/* <Text
              style={stylesConfrrmationCodeView.signupText}
              onPress={handleResendConfirmateOtp}>
              ¿Aún no has recibido el OTP?
              <Text style={stylesConfrrmationCodeView.signupTextBold}>
                {" "}
                Reenviar OTP
              </Text>
            </Text> */}

            <View style={stylesConfrrmationCodeView.buttonContainer}>
              <ButtonColorTwo handleSignUp={handlePaste}>
                Pegar código
              </ButtonColorTwo>
            </View>
            <View style={stylesConfrrmationCodeView.buttonContainer}>
              <ButtonColor
                navigation={navigation}
                to={"login"}
                handleSignUp={handleConfirmateOtp}>
                Confirmar
              </ButtonColor>
            </View>
          </View>)
          :
          (<View style={stylesConfrrmationCodeView.content}>
            <ActivityIndicator size="small" color="#FFFFFF" />
          </View>)
        }
      </View>
      <ModalError errorMessage={errorMessage} showErrorModal={showErrorModal} />
      <ModalSuccess succesMessage={succesMessage} showSuccessModal={showSuccessModal} onClose={()=>navigation.navigate("login")} />
    </PageWrapper>
  )
}

export default ConfirmationCodeView
