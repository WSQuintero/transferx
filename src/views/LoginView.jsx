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
        <View style={stylesLoginView.content}>
    <Image source={require('../../assets/image.png')} style={{width:"50%",objectFit:"contain"}}></Image>
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

          <TouchableOpacity
            onPress={handleLogin}
            style={stylesLoginView.loginButton}>
            <ButtonColor navigation={navigation} to={"sectionTwo"}>Login</ButtonColor>
          </TouchableOpacity>

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
