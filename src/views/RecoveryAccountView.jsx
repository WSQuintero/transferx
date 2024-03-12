import React, { useMemo, useState, useContext, useEffect } from "react"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesLoginView from "../styles/stylesLoginView"
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native"
import RememberMeCheckBox from "../components/RememberMeCheckBox"
import ButtonColor from "../components/ButtonColor"
import { MyContext } from "../context/context"
import ModalError from "../components/ModalError"
import ModalSuccess from "../components/ModalSuccess"
import AsyncStorage from "@react-native-async-storage/async-storage"

const RecoveryAccountView = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [sending, setSending] = useState(false)
  const [fillCode, setFillCode] = useState(false)
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [succesMessage, setSuccesMessage] = useState("");

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

  const validation = async () => {
    // Verificar que todos los campos estén llenos
    if (!email || !code || !password) {
      setErrorMessage("Todos los campos deben estar llenos")
      setShowErrorModal(true)
      return false
    }

    
    const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    if (!passwordPattern.test(password)) {
      setErrorMessage(
        "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número, un carácter especial y tener una longitud mínima de 8 caracteres."
      )
      setShowErrorModal(true)
      return false
    }

    return true
  }

  const handleRecoveryAccount = async () => {
    try {
      setSending(true);

      if(!fillCode){
        const { status, data } = await $Auth.recoveryAccount({
          email
        })
        setFillCode(true);
      }else{

        if (!(await validation())) {
          setSending(false);
          return
        }

        const { status, data } = await $Auth.changePassword({
          email,
          password,
          code
        })

        if(data.data?.address_wallet_transfer_in){
          setSuccesMessage(
            "La contraseña ha sido asignada correctamente."
          )
          setShowSuccessModal(true);
        }else{
          navigation.navigate('login');
        }

      }

      setSending(false);
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
          <Text style={stylesLoginView.title}>Recuperar contraseña</Text>
          <Text style={stylesLoginView.subtitle}>
            Digita el correo electrónico asociado a tu cuenta
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
                readOnly={(fillCode||sending)}
                value={email}
              />
            </View>
          </View>

          {fillCode&&(<View style={stylesLoginView.inputContainer}>
            <Text style={stylesLoginView.inputLabel}>Código recibido al correo electrónico</Text>
            <View style={stylesLoginView.textInputContainer}>
              <Image
                source={require("../../assets/icons/34.png")}
                style={stylesLoginView.icon}></Image>
              <TextInput
                style={stylesLoginView.textInput}
                onChangeText={(text) => setCode(text)}
                value={code}
                readOnly={sending}
              />
            </View>
          </View>)}

          {fillCode&&(<View style={stylesLoginView.inputContainer}>
            <Text style={stylesLoginView.inputLabel}>Nueva Contraseña</Text>
            <View style={stylesLoginView.textInputContainer}>
              <Image
                source={require("../../assets/icons/34.png")}
                style={stylesLoginView.icon}></Image>
              <TextInput
                style={stylesLoginView.textInput}
                onChangeText={(text) => setPassword(text)}
                value={password}
                readOnly={sending}
                secureTextEntry={true}
              />
            </View>
            <View style={stylesLoginView.rememberCheck} onPress={() => navigation.navigate("recoveryAccount")}>
              
            </View>
          </View>)}

          {!sending ? 
            (<>
                <ButtonColor
                  handleSignUp={handleRecoveryAccount}>
                  {fillCode ? 'Cambiar contraseña' : 'Enviar código'}
                </ButtonColor>

                <Text
                  style={stylesLoginView.signupText}
                  onPress={() => navigation.navigate("login")}>
                  ¿Ya tienes una cuenta?{" "}
                  <Text style={stylesLoginView.signupTextBold}>Ingresa</Text>
                </Text>
              </>)
              :
              (<>
                <ActivityIndicator size="small" color="#FFFFFF" />
              </>)
            }
        </View>
      </View>
      <ModalError showErrorModal={showErrorModal} errorMessage={errorMessage} />
      <ModalSuccess succesMessage={succesMessage} showSuccessModal={showSuccessModal} onClose={()=>navigation.navigate("login")} />
    </PageWrapper>
  )
}

export default RecoveryAccountView
