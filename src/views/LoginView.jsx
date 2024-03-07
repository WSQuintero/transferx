import React, { useMemo, useState, useContext, useEffect } from "react"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesLoginView from "../styles/stylesLoginView"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import RememberMeCheckBox from "../components/RememberMeCheckBox"
import ButtonColor from "../components/ButtonColor"
import { MyContext } from "../context/context"
import ModalError from "../components/ModalError"
import AsyncStorage from "@react-native-async-storage/async-storage"

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const fontsLoaded = useLoadFonts()
  const {
    $Auth,
    showErrorModal,
    setShowErrorModal,
    errorMessage,
    setErrorMessage,
    setToken,
    setInformationUser
  } = useContext(MyContext)

  const validateErrorMessage = (errorMessage) => {
    switch (errorMessage) {
      case "Valida primero tu correo electrónico y número de teléfono":
        setErrorMessage(
          "Por favor, valida tu correo electrónico y teléfono antes de iniciar sesión."
        )
        setShowErrorModal(true)
        break
      case "incorrect password":
        setErrorMessage(
          "Contraseña incorrecta. Por favor, verifica tu contraseña e intenta nuevamente."
        )
        setShowErrorModal(true)
        break
      case "user does not exist":
        setErrorMessage(
          "El usuario no existe. Por favor, verifica tus credenciales o regístrate si eres nuevo."
        )
        setShowErrorModal(true)
        break
      default:
        console.error("Error en el inicio de sesión:", errorMessage)
    }
  }

  const handleLogin = async () => {
    try {
      const { status, data } = await $Auth.signIn({
        email,
        password
      })

      if (status) {
        await AsyncStorage.setItem("sessionToken", data.data.token)
        navigation.navigate(
          data.data.user.id_number_owner_account_bank_transfer
            ? "exchange"
            : "SelectInformationBankView"
        )
        setToken(data.data.token)
        setInformationUser(data.data)
      } else {
        validateErrorMessage(data.data.message)
      }
    } catch (error) {
      console.error("Error en la petición:", error)
    }
  }

  useEffect(() => {
    const checkSessionToken = async () => {
      try {
        const sessionToken = await AsyncStorage.getItem("sessionToken")
        if (sessionToken) {
          navigation.navigate("SelectInformationBankView")
        }
      } catch (error) {
        console.error("Error al verificar el token de sesión:", error)
        setShowErrorModal(true)
      }
    }

    // checkSessionToken();
  }, [navigation, setShowErrorModal])

  return (
    <PageWrapper>
      <View style={stylesLoginView.container}>
        <View style={stylesLoginView.content}>
          <Image
            source={require("../../assets/image.png")}
            style={{ width: "80%", objectFit: "contain" }}></Image>
          <Text style={stylesLoginView.title}>Accede a tu cuenta</Text>
          <Text style={stylesLoginView.subtitle}>
            ¡Bienvenido de nuevo! Por favor, ingresa tus credenciales
          </Text>

          <View style={stylesLoginView.inputContainer}>
            <Text style={stylesLoginView.inputLabel}>Email</Text>
            <View style={stylesLoginView.textInputContainer}>
              <Image
                source={require("../../assets/icons/6.png")}
                style={stylesLoginView.icon}></Image>
              <TextInput
                style={stylesLoginView.textInput}
                onChangeText={(text) => setEmail(text)}
                value={email}
                // placeholder="Your Email Address"
              />
            </View>
          </View>

          <View style={stylesLoginView.inputContainer}>
            <Text style={stylesLoginView.inputLabel}>Contraseña</Text>
            <View style={stylesLoginView.textInputContainer}>
              <Image
                source={require("../../assets/icons/34.png")}
                style={stylesLoginView.icon}></Image>
              <TextInput
                style={stylesLoginView.textInput}
                onChangeText={(text) => setPassword(text)}
                value={password}
                // placeholder="Enter Your Password"
                secureTextEntry={true}
              />
            </View>
            <View style={stylesLoginView.rememberCheck}>
              {/* <RememberMeCheckBox/> */}
              <Text style={stylesLoginView.forgot}>Olvidé mi contraseña</Text>
            </View>
          </View>

          <ButtonColor
            navigation={navigation}
            to={"exchange"}
            handleSignUp={handleLogin}>
            Login
          </ButtonColor>

          <Text
            style={stylesLoginView.signupText}
            onPress={() => navigation.navigate("signup")}>
            ¿No tienes una cuenta?{" "}
            <Text style={stylesLoginView.signupTextBold}>Regístrate</Text>
          </Text>
        </View>
      </View>
      <ModalError showErrorModal={showErrorModal} errorMessage={errorMessage} />
    </PageWrapper>
  )
}

export default LoginView
