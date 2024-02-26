import React, { useMemo, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesLoginView from "../styles/stylesLoginView"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native"
import RememberMeCheckBox from "../components/RememberMeCheckBox"
import ButtonColor from "../components/ButtonColor"

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const fontsLoaded = useLoadFonts()
  // const $Auth = useMemo(() => new AuthService(), [])

  const handleLogin = async () => {
    navigation.navigate("exchange")

    // try {
    //   const { status, data } = await $Auth.SignIn({
    //     email,
    //     password
    //   })

    //   if (status) {
    //     // Registro exitoso, puedes navegar a la siguiente pantalla
    //     navigation.navigate("sectionTwo")
    //         } else {
    //     // Manejar el caso de error, por ejemplo, mostrar un mensaje al usuario
    //     console.error("Error en el registro:", data)
    //   }
    // } catch (error) {
    //   // console.error("Error en la petición:", error)
    // }
  }

  return (
    <PageWrapper>
      <View style={stylesLoginView.container}>
        <View style={stylesLoginView.content}>
    <Image source={require('../../assets/image.png')} style={{width:"80%",objectFit:"contain"}}></Image>
          <Text style={stylesLoginView.title}>Log in to Your Account</Text>
          <Text style={stylesLoginView.subtitle}>
          Welcome back! Please enter your details
          </Text>

          <View style={stylesLoginView.inputContainer}>
            <Text style={stylesLoginView.inputLabel} >Email</Text>
            <View style={stylesLoginView.textInputContainer}>
              <Image source={require('../../assets/icons/6.png')} style={stylesLoginView.icon}></Image>
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
            <Image source={require('../../assets/icons/34.png')} style={stylesLoginView.icon}></Image>
                  <TextInput
                style={stylesLoginView.textInput}
                onChangeText={(text) => setPassword(text)}
                value={password}
                // placeholder="Enter Your Password"
                secureTextEntry={true}              />

            </View>
            <View style={stylesLoginView.rememberCheck}>

            {/* <RememberMeCheckBox/> */}
            <Text style={stylesLoginView.forgot}>Forgot Password</Text>
            </View>
          </View>

            <ButtonColor navigation={navigation} to={"exchange"} handleSignUp={handleLogin}>Login</ButtonColor>

          <Text
            style={stylesLoginView.signupText}
            onPress={() => navigation.navigate("signup")}>
            Don’t have an account? <Text style={stylesLoginView.signupTextBold}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </PageWrapper>
  )
}

export default LoginView
