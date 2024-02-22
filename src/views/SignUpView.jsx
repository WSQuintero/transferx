import React, { useState } from "react"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesSignUp from "../styles/stylesSignUp"
import { View, Text, TextInput, Image } from "react-native"
import ButtonColor from "../components/ButtonColor"
import TyCcheckBox from "../components/TyCcheckBox"

const SignUpView = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const fontsLoaded = useLoadFonts()

  return (
    <PageWrapper>
      <View style={stylesSignUp.backButton}>
        <BackButton />
      </View>
      <View style={stylesSignUp.container}>
        <View style={stylesSignUp.centerContent}>
          <Text style={stylesSignUp.title}>Sign Up</Text>
          <Text style={stylesSignUp.subtitle}>Please sign up to continue</Text>
          <View style={stylesSignUp.inputContainer}>
            <Text style={stylesSignUp.inputLabel}>Name</Text>
            <View style={stylesSignUp.textInputContainer}>
              <Image
                source={require("../../assets/icons/16.png")}
                style={stylesSignUp.icon}
              />
              <TextInput
                style={stylesSignUp.input}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Your Name"
                placeholderTextColor="#BFBFBF"
              />
            </View>
          </View>

          <View style={stylesSignUp.inputContainer}>
            <Text style={stylesSignUp.inputLabel}>Email</Text>
            <View style={stylesSignUp.textInputContainer}>
              <Image
                source={require("../../assets/icons/6.png")}
                style={stylesSignUp.icon}
              />
              <TextInput
                style={stylesSignUp.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Your Email Address"
                placeholderTextColor="#BFBFBF"
              />
            </View>
          </View>

          <View style={stylesSignUp.inputContainer}>
            <Text style={stylesSignUp.inputLabel}>Password</Text>
            <View style={stylesSignUp.textInputContainer}>
              <Image
                source={require("../../assets/icons/34.png")}
                style={stylesSignUp.icon}
              />
              <TextInput
                style={stylesSignUp.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Enter Your Password"
                secureTextEntry={true}
                placeholderTextColor="#BFBFBF"
              />
                            <Image
                source={require("../../assets/icons/Icon.png")}
                style={stylesSignUp.iconRight}
              />
            </View>
          </View>

          <TyCcheckBox />
          <View style={stylesSignUp.button}>
            <ButtonColor navigation={navigation} to={"login"}>
              Sign Up
            </ButtonColor>
          </View>
        </View>
        <Text
          style={stylesSignUp.footerText}
          onPress={() => navigation.navigate("login")}>
          Already have account?
          <Text style={stylesSignUp.signupTextBold}> Sign In</Text>
        </Text>
      </View>
    </PageWrapper>
  )
}

export default SignUpView
