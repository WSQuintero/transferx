import React, { useContext, useEffect, useState } from "react"
import { Image, ScrollView, Text, TextInput, View } from "react-native"
import BackButton from "../components/BackButton"
import PageWrapper from "../components/PageWrapper"
import stylesExchangeView from "../styles/stylesExchangeView"
import ButtonColor from "../components/ButtonColor"
import FooterMenu from "../components/FooterMenu"
import { MyContext } from "../context/context"

// Define el hook useInterval

function Exchange({ navigation }) {
  const [usdtTether, setUsdtTether] = useState("0")
  const { $Exchange, token } = useContext(MyContext)
  const [rate, setRate] = useState()
  const [quote, setQuote] = useState()

  const handleSignUp = () => {
    navigation.navigate("card")
  }

  function formatNumber(number) {
    const [integerPart, decimalPart] = number.toString().split(".")
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    )

    return decimalPart
      ? `${formattedIntegerPart},${decimalPart}`
      : formattedIntegerPart
  }

  useEffect(() => {
    const fetchRate = async () => {
      const { status, data } = await $Exchange.getP2PRate(token)
      if (status) {
        setRate(data.data.rateTransferx)
      } else {
        console.log(data)
      }
    }

    const fetchQuote = async () => {
      const { status, data } = await $Exchange.getP2PQuote(token, usdtTether)
      if (status) {
        setQuote(data.data.quoteAmountOut)
      } else {
        console.log(data)
      }
    }
    fetchRate()
    fetchQuote()

    // Establecer el intervalo para actualizar cada 30 segundos
    const interval = 30 * 1000 // 30 segundos en milisegundos
    const intervalId = setInterval(fetchRate, interval)
    const intervalQuote = setInterval(fetchQuote, interval)

    // Limpiar el intervalo al desmontar el componente
    return () => {
      clearInterval(intervalId)
      clearInterval(intervalQuote)
    }
  }, [usdtTether,token])

  return (
    <>
      <PageWrapper>
        <BackButton />
        <Text style={stylesExchangeView.title}>Exchange</Text>
        <ScrollView style={stylesExchangeView.container}>
          <View style={stylesExchangeView.containerChange}>
            <Text style={stylesExchangeView.titleContainer}>
              Available Balance:{" "}
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
              <Text style={stylesExchangeView.inputLabel}>Transfer amount</Text>
              <View style={stylesExchangeView.textInputContainer}>
                <TextInput
                  style={stylesExchangeView.textInput}
                  onChangeText={(text) => {
                    // Solo permitir números
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
                  COP - Colombian Peso
                </Text>
              </View>
            </View>
            <View style={stylesExchangeView.inputContainer}>
              <Text style={stylesExchangeView.inputLabel}>
                Indicated amount received
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
                <Text style={stylesExchangeView.textTitle}>Exchange Rate</Text>
                <Text style={stylesExchangeView.text}>
                  1.00 USDT = ${rate?formatNumber(rate):0} COPS
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
                  Estimated Received Time
                </Text>
                <Text style={stylesExchangeView.text}>5 mins</Text>
              </View>
            </View>
          </View>
          <View style={stylesExchangeView.containerButton}>
            <ButtonColor
              navigation={navigation}
              to={"card"}
              handleSignUp={handleSignUp}>
              Confirm
            </ButtonColor>
          </View>
        </ScrollView>
      </PageWrapper>
      <FooterMenu actual="exchange" navigation={navigation} />
    </>
  )
}

export default Exchange
