import React, { useMemo, useState, useContext } from "react"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesLoginView from "../styles/stylesLoginView"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import RememberMeCheckBox from "../components/RememberMeCheckBox"
import ButtonColor from "../components/ButtonColor"
import { MyContext } from "../context/context"
import ModalError from "../components/ModalError"

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const fontsLoaded = useLoadFonts()
  const {
    $Auth,
    showErrorModal,
    setShowErrorModal,
    errorMessage,
    setErrorMessage
  } = useContext(MyContext)

  const validateErrorMessage = (errorMessage) => {
    switch (errorMessage) {
      case "validate your email and phone first":
        setErrorMessage(
          "Por favor, valida tu correo electrónico y teléfono antes de iniciar sesión."
        );
        setShowErrorModal(true);
        break;
      case "incorrect password":
        setErrorMessage("Contraseña incorrecta. Por favor, verifica tu contraseña e intenta nuevamente.");
        setShowErrorModal(true);
        break;
      default:
        console.error("Error en el inicio de sesión:", errorMessage);
    }
  };

  const handleLogin = async () => {
    // navigation.navigate("exchange")

    try {
      const { status, data } = await $Auth.signIn({
        email,
        password
      })

      if (status) {
        // Registro exitoso, puedes navegar a la siguiente pantalla
        navigation.navigate("exchange")
      } else {
        // Manejar el caso de error, llamando a la función validateErrorMessage
        validateErrorMessage(data.data.message)
        console.log(data)
      }
    } catch (error) {
      console.error("Error en la petición:", error)
    }
  }

  return (
    <PageWrapper>
      <View style={stylesLoginView.container}>
        <View style={stylesLoginView.content}>
          <Image
            source={require("../../assets/image.png")}
            style={{ width: "80%", objectFit: "contain" }}></Image>
          <Text style={stylesLoginView.title}>Log in to Your Account</Text>
          <Text style={stylesLoginView.subtitle}>
            Welcome back! Please enter your details
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
            <Text style={stylesLoginView.inputLabel}>Password</Text>
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
              <Text style={stylesLoginView.forgot}>Forgot Password</Text>
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
            Don’t have an account?{" "}
            <Text style={stylesLoginView.signupTextBold}>Sign Up</Text>
          </Text>
        </View>
      </View>
      <ModalError showErrorModal={showErrorModal} errorMessage={errorMessage}/>
    </PageWrapper>
  )
}

export default LoginView
