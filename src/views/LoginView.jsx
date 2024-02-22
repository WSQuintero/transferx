import React, { useState } from "react"
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

  const handleLogin = () => {
    navigation.navigate("sectionTwo")
  }

  return (
    <PageWrapper>
      <View style={stylesLoginView.container}>
        <View style={stylesLoginView.containerArrow}>
        <BackButton />

        </View>

        <View style={stylesLoginView.content}>
          <Text style={stylesLoginView.title}>Log in</Text>
          <Text style={stylesLoginView.subtitle}>
            Please login with your MIRA account
          </Text>

          <View style={stylesLoginView.inputContainer}>
            <Text style={stylesLoginView.inputLabel} >Email</Text>
            <View style={stylesLoginView.textInputContainer}>
              <Image source={require('../../assets/icons/6.png')} style={stylesLoginView.icon}></Image>
              <TextInput
                style={stylesLoginView.textInput}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Your Email Address"
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
                placeholder="Enter Your Password"
                secureTextEntry={true}              />
            <Image source={require('../../assets/icons/Icon.png')} style={stylesLoginView.icon}></Image>

            </View>
            <View style={stylesLoginView.rememberCheck}>

            <RememberMeCheckBox/>
            <Text style={stylesLoginView.forgot}>Forgot Password</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            style={stylesLoginView.loginButton}>
            <ButtonColor navigation={navigation} to={"sectionTwo"}>Login</ButtonColor>
          </TouchableOpacity>

          <Text style={stylesLoginView.signinText}>Or Sign in with</Text>
          <View style={stylesLoginView.socialButtons}>
            <TouchableOpacity style={stylesLoginView.socialButton}>
              <Image
                source={require("../../assets/google_logo.png")}
                style={stylesLoginView.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={stylesLoginView.socialButton}>
              <Image
                source={require("../../assets/facebook_logo.png")}
                style={stylesLoginView.socialIcon}
              />
            </TouchableOpacity>
          </View>

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
