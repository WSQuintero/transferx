import React, { useState } from "react"
import { Image, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native" // Importa TouchableOpacity de react-native-web
import BackButton from "../components/BackButton"
import PageWrapper from "../components/PageWrapper"
import stylesExchangeView from "../styles/stylesExchangeView"
import { AntDesign } from "@expo/vector-icons"
import ButtonColor from "../components/ButtonColor"

function Exchange() {
  const [usdtTether, setUsdtTether] = useState("")
  const [getExchange, setGetExchange] = useState(false)
  return (
    <PageWrapper>
      <BackButton />
      <Text style={stylesExchangeView.title}>Exchange</Text>
      <View style={stylesExchangeView.container}>
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
                onChangeText={(text) => setUsdtTether(text)}
                value={usdtTether}
                // placeholder="Your Email Address"
              />
            </View>
          </View>
          <View style={stylesExchangeView.containerArrow}>
            <View style={stylesExchangeView.line} />
            <TouchableOpacity
              style={stylesExchangeView.buttonArrow}
              onPress={() => setGetExchange(true)}>
              <AntDesign name="arrowdown" size={24} color="black" />
            </TouchableOpacity>

            <View style={stylesExchangeView.line} />
          </View>

          {getExchange && (
            <>
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
                    3.700.000 COPS
                  </Text>
                </View>
              </View>
            </>
          )}
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
                1.00 USDT = 3,964.8673 COP
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
              <Text style={stylesExchangeView.textTitle}>Estimated Received Time</Text>
              <Text style={stylesExchangeView.text}>
              5 mins
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesExchangeView.containerButton}>
      <ButtonColor>Confirm</ButtonColor>
        </View>
      </View>
    </PageWrapper>
  )
}

export default Exchange
