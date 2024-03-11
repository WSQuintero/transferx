import React, { useContext, useEffect, useState } from "react"
import { Image, ScrollView, Text, TextInput, View } from "react-native"
import BackButton from "../components/BackButton"
import PageWrapper from "../components/PageWrapper"
import stylesExchangeView from "../styles/stylesExchangeView"
import ButtonColor from "../components/ButtonColor"
import FooterMenu from "../components/FooterMenu"
import { MyContext } from "../context/context"
import { formatNumber } from "../utils/Constants"
import ModalError from "../components/ModalError"

function Exchange({ navigation }) {
  const [usdtTether, setUsdtTether] = useState("0")
  const { $Exchange, token, setUpdatedOrder } = useContext(MyContext)
  const [rate, setRate] = useState()
  const [quote, setQuote] = useState()
  const [countdown, setCountdown] = useState(30)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSendRequest = async () => {
    setUpdatedOrder(false)

    if (token && token.trim() !== "") {
      const { status, data } = await $Exchange.p2pRequest(token, usdtTether)

      if (status) {
        navigation.navigate("exchange")
        setUpdatedOrder(true)
      } else {
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
      // Validar si el token está definido y no es nulo ni una cadena vacía
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
      // Validar si el token está definido y no es nulo ni una cadena vacía
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

    // Establecer el intervalo para actualizar cada 30 segundos
    const interval = 30 * 1000
    const intervalId = setInterval(fetchRate, interval)
    const intervalQuote = setInterval(fetchQuote, interval)

    // Establecer el intervalo para el contador regresivo
    const countdownIntervalId = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 30
      )
    }, 1000)

    // Limpiar los intervalos al desmontar el componente
    return () => {
      clearInterval(intervalId)
      clearInterval(intervalQuote)
      clearInterval(countdownIntervalId)
    }
  }, [usdtTether, token])

  return (
    <>
      <PageWrapper>
        <BackButton />
        <Text style={stylesExchangeView.title}>Exchange</Text>
        <ScrollView style={stylesExchangeView.container}>
          <View style={stylesExchangeView.containerChange}>
            <Text style={stylesExchangeView.titleContainer}>
              Saldo Disponible:{" "}
              <Text style={stylesExchangeView.titleUsdt}>USDT 5667.00</Text>
            </Text>
            <View style={stylesExchangeView.inputContainer}>
              <View style={stylesExchangeView.textInputContainerClear}>
                <Image
                  source={require("../../assets/t.png")}
                  style={stylesExchangeView.icon}
                />
                <Text style={stylesExchangeView.textInput}>USDT - Tether</Text>
              </View>
            </View>
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
            <View style={stylesExchangeView.inputContainer}>
              <Text style={stylesExchangeView.inputLabel}>
                Valor a recibir{" "}
                <Text style={stylesExchangeView.inputLabelRed}>
                  {" (cambia cada 30 segundos)"}
                </Text>{" "}
              </Text>
              <View style={stylesExchangeView.textInputContainer}>
                <Text style={stylesExchangeView.textInput}>
                  ${quote ? formatNumber(quote) : 0} COPS
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
                <Text style={stylesExchangeView.textTitle}>Tipo de Cambio</Text>
                <Text style={stylesExchangeView.text}>
                  1.00 USDT = ${rate ? formatNumber(rate) : 0} COPS
                </Text>
              </View>
            </View>
          </View>
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
          <View style={stylesExchangeView.containerButton}>
            <ButtonColor
              navigation={navigation}
              to={"card"}
              handleSignUp={handleSendRequest}>
              Confirmar
            </ButtonColor>
          </View>
        </ScrollView>
      </PageWrapper>
      <ModalError
        showErrorModal={showErrorModal}
        errorMessage={errorMessage}></ModalError>
      {/* <FooterMenu actual="exchange" navigation={navigation} /> */}
    </>
  )
}

export default Exchange
