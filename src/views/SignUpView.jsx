import React, { useContext, useEffect, useMemo, useState } from "react"
import { View, Text, TextInput, Image, TouchableOpacity, Modal } from "react-native"
import ButtonColor from "../components/ButtonColor"
import PageWrapper from "../components/PageWrapper"
import stylesSignUp from "../styles/stylesSignUp"
import { MyContext } from "../context/context"
import AuthService from "../services/AuthService"
import ModalError from "../components/ModalError"

const SignUpView = ({ navigation }) => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [cellphone, setCellPhone] = useState("")
  const [password, setPassword] = useState("")
  const $Auth = useMemo(() => new AuthService(), [])
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validation = () => {
    if (!name || !lastName || !email || !cellphone || !password) {
      setErrorMessage("Todos los campos deben estar llenos");
      setShowErrorModal(true);
      return false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordPattern.test(password)) {
      setErrorMessage("La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número, un carácter especial y tener una longitud mínima de 8 caracteres.");
      setShowErrorModal(true);
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Por favor, introduce una dirección de correo electrónico válida.");
      setShowErrorModal(true);
      return false;
    }

    return true;
  }


  const handleSignUp = async () => {
    if (!validation()) {
      return; // Detener el proceso si la validación falla
    }

    const { status, data } = await $Auth.signUp({
      firstname: name,
      lastname: lastName,
      email,
      cellphone,
      password
    });

    if (status) {
      navigation.navigate("confirmationCode");
    } else {
      console.error("Error en el registro:", data);
    }
  }


  useEffect(() => {
    if (showErrorModal) {
      setTimeout(() => {
        setShowErrorModal(false)
        setErrorMessage("")
      }, 2000)
    }
  }, [showErrorModal])

  return (
    <PageWrapper>
      <View style={stylesSignUp.container}>
        <View style={stylesSignUp.centerContent}>
          <Image
            source={require("../../assets/image.png")}
            style={{ width: "80%",objectFit:"contain" }}
          />
          <Text style={stylesSignUp.title}>Sign up to Your Account</Text>
          <Text style={stylesSignUp.subtitle}>
            Welcome, please enter your details
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
          <View style={stylesSignUp.buttonContainer}>
          <ButtonColor handleSignUp={handleSignUp}>Get Started</ButtonColor>
          </View>
          <Text
            style={stylesSignUp.footerText}
            onPress={() => navigation.navigate("login")}>
            Already have an account?{" "}
            <Text style={stylesSignUp.signupTextBold}>Sign In</Text>
          </Text>
        </View>
      </View>
    <ModalError showErrorModal={showErrorModal} errorMessage={errorMessage}/>
    </PageWrapper>
  )
}

export default SignUpView
