import React, { useContext, useMemo, useState } from "react"
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native"
import ButtonColor from "../components/ButtonColor"
import PageWrapper from "../components/PageWrapper"
import stylesSignUp from "../styles/stylesSignUp"
import { MyContext } from "../context/context"
import AuthService from "../services/AuthService"

const SignUpView = ({ navigation }) => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [cellphone, setCellPhone] = useState("")
  const [password, setPassword] = useState("")
  // const $Auth = useMemo(() => new AuthService(), [])

  const handleSignUp = async () => {
    navigation.navigate("SelectInformationBankView")

    // try {
    //   const { status, data } = await $Auth.signUp({
    //     firstname: name,
    //     lastname: lastName,
    //     email,
    //     cellphone,
    //     password
    //   })

    //   if (status) {
    //     // Registro exitoso, puedes navegar a la siguiente pantalla
    //     navigation.navigate("SelectInformationBankView")
    //   } else {
    //     // Manejar el caso de error, por ejemplo, mostrar un mensaje al usuario
    //     console.error("Error en el registro:", data)
    //   }
    // } catch (error) {
    //   // console.error("Error en la petición:", error)
    // }
  }

  return (
    <PageWrapper>
      <View style={stylesSignUp.container}>
        <View style={stylesSignUp.centerContent}>
          <Image
            source={require("../../assets/image.png")}
            style={{ width: "50%", objectFit: "contain" }}
          />
          <Text style={stylesSignUp.title}>Log in to Your Account</Text>
          <Text style={stylesSignUp.subtitle}>
            Welcome back! Please enter your details
          </Text>
          <View style={stylesSignUp.inputContainer}>
            <Text style={stylesSignUp.inputLabel}>Nombres</Text>
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
            <Text style={stylesSignUp.inputLabel}>Apellidos</Text>
            <View style={stylesSignUp.textInputContainer}>
              <Image
                source={require("../../assets/icons/16.png")}
                style={stylesSignUp.icon}
              />
              <TextInput
                style={stylesSignUp.input}
                onChangeText={(text) => setLastName(text)}
                value={lastName}
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
                onChangeText={(text) => setCellPhone(text)}
                value={cellphone}
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
          <ButtonColor handleSignUp={handleSignUp}>Get Started</ButtonColor>
          <Text
            style={stylesSignUp.footerText}
            onPress={() => navigation.navigate("login")}>
            Already have an account?{" "}
            <Text style={stylesSignUp.signupTextBold}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </PageWrapper>
  )
}

export default SignUpView
