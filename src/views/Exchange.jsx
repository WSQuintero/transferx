import React, { useContext, useEffect, useState } from "react"
import {
  Image,
  Keyboard,
  ScrollView,
  Platform,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Linking
} from "react-native"
import BackButton from "../components/BackButton"
import PageWrapper from "../components/PageWrapper"
import stylesExchangeView from "../styles/stylesExchangeView"
import ButtonColor from "../components/ButtonColor"
import FooterMenu from "../components/FooterMenu"
import { MyContext } from "../context/context"
import { formatNumber } from "../utils/Constants"
import ModalError from "../components/ModalError"
import ModalSuccess from "../components/ModalSuccess"

function Exchange({ navigation }) {
  const [usdtTether, setUsdtTether] = useState("0")
  const { $Exchange, token, setUpdatedOrder } = useContext(MyContext)
  const [openKeyBoard, setOpenKeyBoard] = useState(false)
  const [rate, setRate] = useState()
  const [sending, setSending] = useState(false)
  const [quote, setQuote] = useState()
  const [countdown, setCountdown] = useState(30)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  Keyboard.addListener("keyboardDidShow", () => {
    setOpenKeyBoard(true)
  })

  Keyboard.addListener("keyboardDidHide", () => {
    setOpenKeyBoard(false)
  })

  const handleSendRequest = async () => {
    setUpdatedOrder(false)

    if (token && token.trim() !== "") {
      setSending(true)
      const { status, data } = await $Exchange.p2pRequest(token, usdtTether)
      setSending(false)

      if (status) {
        navigation.navigate("exchange")
        setUpdatedOrder(true)
      } else {
        console.log(data.data)

        if (data.data.message === "First validate your KYC and Sarlaft") {
          setShowErrorModal(true)
          setErrorMessage(
            "Tu formulario está pendiente de aprobación, por favor espera la respuesta del administrador"
          )

          setTimeout(() => {
            setShowErrorModal(false)
            setErrorMessage("")
          }, 2000)
        }

        if (data.data.message === "validate your email and phone first") {
          setErrorMessage("Por favor valida tu email y tu teléfono")
          setShowErrorModal(true)
        }

        if (
          data.data.message ===
          "First configure a valid Tron Wallet Address in on your profile"
        ) {
          setErrorMessage(
            "Por favor configure primero su dirección de wallet en TRON válida"
          )
          setShowErrorModal(true)
        }

        if (
          data.data.message ===
          "First configure your account bank in on your profile"
        ) {
          setErrorMessage("Por favor configure primero su cuenta de banco")
          setShowErrorModal(true)
        }

        if (
          data.data.message.indexOf(
            "First sign contract for 2,000 USDT transactions"
          ) >= 0
        ) {
          let link = data.data.message.split(" - ")
          setSuccessMessage(
            "Para ejecutar la transacción que intentas realizar debes firmar un acuerdo. Por favor revisa tu correo electrónico, y firma el documento: " +
              link[1]
          )
          setShowSuccessModal(true)
        } else if (
          data.data.message ==
          "The contract has already been received, it's in the validation process."
        ) {
          setSuccessMessage(
            "Ya se ha recibido el contrato, está en proceso de validación."
          )
          setShowSuccessModal(true)
        }
        setTimeout(() => {
          setShowErrorModal(false)
          setErrorMessage("")
        }, 2000)
      }
    } else {
      console.log("Token no válido.")
    }
  }
  useEffect(() => {
    const fetchRate = async () => {
      if (token && token.trim() !== "") {
        const { status, data } = await $Exchange?.getP2PRate(token)
        if (status) {
          setRate(data.data.rateTransferx)
        } else {
          console.log(data)
        }
      } else {
        console.log("Token no válido para la obtención de la tasa.")
      }
    }

    const fetchQuote = async () => {
      if (token && token.trim() !== "") {
        const { status, data } = await $Exchange?.getP2PQuote(token, usdtTether)
        if (status) {
          setQuote(data.data.quoteAmountOut)
        } else {
          console.log(data)
        }
      } else {
        console.log("Token no válido para la obtención de la cotización.")
      }
    }

    fetchRate()
    fetchQuote()

    const interval = 30 * 1000
    const intervalId = setInterval(fetchRate, interval)
    const intervalQuote = setInterval(fetchQuote, interval)

    const countdownIntervalId = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 30
      )
    }, 1000)

    return () => {
      clearInterval(intervalId)
      clearInterval(intervalQuote)
      clearInterval(countdownIntervalId)
    }
  }, [usdtTether, token])

  return (
    <>
      <PageWrapper>
        {!sending ? (
          <>
            <BackButton />
            <Text
              style={[
                stylesExchangeView.title,
                { fontSize: !openKeyBoard || Platform.OS !== "ios" ? 35 : 20 }
              ]}>
              X-TC
            </Text>
            <ScrollView style={stylesExchangeView.container}>
              <View
                style={[
                  stylesExchangeView.containerChange,
                  {
                    minHeight:
                      !openKeyBoard || Platform.OS !== "ios" ? 300 : 200
                  }
                ]}>
                {(!openKeyBoard || Platform.OS !== "ios") && (
                  <Text style={stylesExchangeView.titleContainer}>
                    Saldo Disponible:{" "}
                    <Text style={stylesExchangeView.titleUsdt}>
                      USDT 5667.00
                    </Text>
                  </Text>
                )}
                {(!openKeyBoard || Platform.OS !== "ios") && (
                  <View style={stylesExchangeView.inputContainer}>
                    <View style={stylesExchangeView.textInputContainerClear}>
                      <Image
                        source={require("../../assets/t.png")}
                        style={stylesExchangeView.icon}
                      />
                      <Text style={stylesExchangeView.textInput}>
                        USDT - Tether
                      </Text>
                    </View>
                  </View>
                )}
                <View style={stylesExchangeView.inputContainer}>
                  <Text style={stylesExchangeView.inputLabel}>
                    Monto de la Transferencia
                  </Text>
                  <View style={stylesExchangeView.textInputContainer}>
                    <TextInput
                      style={stylesExchangeView.textInput}
                      onChangeText={(text) => {
                        const numericValue = text.replace(/[^0-9]/g, "")
                        setUsdtTether(numericValue)
                      }}
                      value={usdtTether}
                      keyboardType="numeric" // Esto permitirá solo números
                    />
                  </View>
                </View>
                {(!openKeyBoard || Platform.OS !== "ios") && (
                  <View style={stylesExchangeView.inputContainer}>
                    <View style={stylesExchangeView.textInputContainerClear}>
                      <Image
                        source={require("../../assets/colombianFlag.png")}
                        style={stylesExchangeView.icon}
                      />
                      <Text style={stylesExchangeView.textInput}>
                        COP - Peso Colombiano
                      </Text>
                    </View>
                  </View>
                )}
                <View style={stylesExchangeView.inputContainer}>
                  <Text style={stylesExchangeView.inputLabel}>
                    Valor a recibir{" "}
                    <Text style={stylesExchangeView.inputLabelRed}>
                      {" (cambia cada 30 segundos)"}
                    </Text>{" "}
                  </Text>
                  <View style={stylesExchangeView.textInputContainer}>
                    <Text style={stylesExchangeView.textInput}>
                      ${quote ? formatNumber(quote) : 0} COP
                    </Text>
                  </View>
                </View>
              </View>

              <View style={stylesExchangeView.mainContainer}>
                <View style={stylesExchangeView.leftContainer}>
                  <Image
                    source={require("../../assets/arrow-transfer.png")}
                    style={stylesExchangeView.icon}
                  />
                </View>
                <View style={stylesExchangeView.rightContainer}>
                  <View style={stylesExchangeView.textContainer}>
                    <Text style={stylesExchangeView.textTitle}>
                      Tipo de Cambio
                    </Text>
                    <Text style={stylesExchangeView.text}>
                      1.00 USDT = ${rate ? formatNumber(rate) : 0} COP
                    </Text>
                  </View>
                </View>
              </View>
              {(!openKeyBoard || Platform.OS !== "ios") && (
                <View style={stylesExchangeView.mainContainer}>
                  <View style={stylesExchangeView.leftContainer}>
                    <Image
                      source={require("../../assets/vector.png")}
                      style={stylesExchangeView.icon}
                    />
                  </View>
                  <View style={stylesExchangeView.rightContainer}>
                    <View style={stylesExchangeView.textContainer}>
                      <Text style={stylesExchangeView.textTitle}>
                        Cuenta Regresiva
                      </Text>
                      <Text style={stylesExchangeView.text}>
                        {countdown} segundos
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              <View style={stylesExchangeView.containerButton}>
                <ButtonColor
                  navigation={navigation}
                  to={"card"}
                  width={365}
                  handleSignUp={handleSendRequest}>
                  Confirmar
                </ButtonColor>
              </View>
            </ScrollView>
          </>
        ) : (
          <View style={stylesExchangeView.containerLoader}>
            {Number(usdtTether) >= 2000 && (
              <Text
                style={[
                  stylesExchangeView.title,
                  {
                    fontSize: 15,
                    textAlign: "center",
                    marginBottom: 30,
                    marginLeft: 0
                  }
                ]}>
                {
                  "Estámos validando el estado de tu contrato para ordenes superiores o iguales a 2,000 USDT"
                }
              </Text>
            )}
            <ActivityIndicator size="small" color="#FFFFFF" />
          </View>
        )}
      </PageWrapper>
      <ModalError
        showErrorModal={showErrorModal}
        errorMessage={errorMessage}></ModalError>

      <ModalSuccess
        title={"Verificación"}
        showSuccessModal={showSuccessModal}
        succesMessage={successMessage}
        inputTextDisabled={successMessage?.split(": ")[1]}
        onClose={async () => {
          setShowSuccessModal(false)
          setSuccessMessage("")

          let link = successMessage.split(": ")[1]

          if (link) {
            await Linking.openURL(link)
          }
        }}
      />
      {/* <FooterMenu actual="exchange" navigation={navigation} /> */}
    </>
  )
}

export default Exchange
