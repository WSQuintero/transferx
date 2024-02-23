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

      <View style={stylesSignUp.container}>
        <View style={stylesSignUp.centerContent}>
        <Image source={require('../../assets/image.png')} style={{width:"50%",objectFit:"contain"}}></Image>
          <Text style={stylesSignUp.title}>Log in to Your Account</Text>
          <Text style={stylesSignUp.subtitle}>
          Welcome back! Please enter your details
          </Text>
          <View style={stylesSignUp.inputContainer}>
            <Text style={stylesSignUp.inputLabel}>Full Name</Text>
            <View style={stylesSignUp.textInputContainer}>
              <Image
                source={require("../../assets/icons/16.png")}
                style={stylesSignUp.icon}
              />
              <TextInput
                style={stylesSignUp.input}
                onChangeText={(text) => setName(text)}
                value={name}
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
                placeholderTextColor="#BFBFBF"
              />
            </View>
          </View>

          <View style={stylesSignUp.inputContainer}>
            <Text style={stylesSignUp.inputLabel}>Phone</Text>
            <View style={stylesSignUp.textInputContainer}>
              <Image
                source={require("../../assets/icons/34.png")}
                style={stylesSignUp.icon}
              />
              <TextInput
                style={stylesSignUp.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
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
                secureTextEntry={true}
                placeholderTextColor="#BFBFBF"
              />

            </View>
          </View>

          <View style={stylesSignUp.button}>
            <ButtonColor navigation={navigation} to={"login"}>
            Get Started
            </ButtonColor>
          </View>
          <Text
          style={stylesSignUp.footerText}
          onPress={() => navigation.navigate("login")}>
          Already have account?
          <Text style={stylesSignUp.signupTextBold}> Sign Up</Text>
        </Text>
        </View>

      </View>
    </PageWrapper>
  )
}

export default SignUpView
