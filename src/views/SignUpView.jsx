import React, { useContext, useEffect, useMemo, useState } from "react"
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal
} from "react-native"
import ButtonColor from "../components/ButtonColor"
import PageWrapper from "../components/PageWrapper"
import stylesSignUp from "../styles/stylesSignUp"
import { MyContext } from "../context/context"
import AuthService from "../services/AuthService"
import ModalError from "../components/ModalError"
import CellphonePicker from "../components/CellphonePicker"
import ModalConfirmationRegister from "../components/ModalConfirmationRegister"

function SignUpView({ navigation }) {
  const {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    cellphone,
    setCellPhone,
    password,
    setPassword,
    showErrorModal,
    setShowErrorModal,
    errorMessage,
    setErrorMessage,
    $Auth
  } = useContext(MyContext)
  const [showModalConfirmationRegister, setShowModalConfirmationRegister] =
    useState(false)
  const [confirmationRegisterMessage, setConfirmationRegisterMessage] =
    useState(true)
  const validation = async () => {
    // Verificar que todos los campos estén llenos
    if (!name || !lastName || !email || !cellphone || !password) {
      setErrorMessage("Todos los campos deben estar llenos")
      setShowErrorModal(true)
      return false
    }

    // Validar que el número de teléfono tenga al menos 12 caracteres
    if (cellphone.length < 12) {
      setErrorMessage(
        "El número de teléfono debe tener al menos 10 caracteres."
      )
      setShowErrorModal(true)
      return false
    }

    // Validar el formato de la contraseña
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    if (!passwordPattern.test(password)) {
      setErrorMessage(
        "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número, un carácter especial y tener una longitud mínima de 8 caracteres."
      )
      setShowErrorModal(true)
      return false
    }

    // Validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setErrorMessage(
        "Por favor, introduce una dirección de correo electrónico válida."
      )
      setShowErrorModal(true)
      return false
    }

    return true
  }
  const handleSignUp = async () => {
    if (!(await validation())) {
      return
    }

    // navigation.navigate("confirmationCode")
    setShowModalConfirmationRegister(true)
    setConfirmationRegisterMessage(
      "¿Estás seguro de enviar estos datos? una vez enviados no podrás modificarlos"
    )
  }

  const onCancel = () => {
    setShowModalConfirmationRegister(false)
    setConfirmationRegisterMessage("")
  }

  const onConfirm = async () => {
    const { status, data } = await $Auth.signUp({
      firstname: name,
      lastname: lastName,
      email,
      cellphone,
      password
    })
    if (data.data.message === "User already exists") {
      setErrorMessage(
        "El usuario ya está registrado. Por favor, inicia sesión o utiliza otra dirección de correo electrónico."
      )
      setShowErrorModal(true)
      return
    }

    if (status) {
      navigation.navigate("confirmationCode")
    } else {
      console.error("Error en el registro:", data)
    }
  }
  return (
    <PageWrapper>
      <View style={stylesSignUp.container}>
        <View style={stylesSignUp.centerContent}>
          <Image
            source={require("../../assets/image.png")}
            style={{ width: "80%", objectFit: "contain" }}
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
              <CellphonePicker setCellPhone={setCellPhone} />
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
      <ModalError showErrorModal={showErrorModal} errorMessage={errorMessage} />
      <ModalConfirmationRegister
        showModalConfirmationRegister={showModalConfirmationRegister}
        confirmationRegisterMessage={confirmationRegisterMessage}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </PageWrapper>
  )
}

export default SignUpView
