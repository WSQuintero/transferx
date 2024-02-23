import React, { useState } from "react"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesSignUp from "../styles/stylesSignUp"
import { View, Text, TextInput, Image } from "react-native"
import ButtonColor from "../components/ButtonColor"
import TyCcheckBox from "../components/TyCcheckBox"
import { Picker } from "@react-native-picker/picker";

const SignUpView = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const fontsLoaded = useLoadFonts()

  const [wallet, setWallet] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const colombianBanks = [
    "Bancolombia",
    "Banco de Bogotá",
    "BBVA Colombia",
    "Banco Popular",
    "Banco de Occidente",
    "Banco Caja Social",
    "Banco AV Villas",
    "Banco Davivienda",
    // Agrega más bancos aquí si es necesario
  ];

  return (
    <PageWrapper>
    <View style={stylesSignUp.container}>
      <View style={stylesSignUp.centerContent}>
        <Image
          source={require('../../assets/image.png')}
          style={{ width: "50%", objectFit: "contain" }}
        />
        <Text style={stylesSignUp.title}>Information Bank</Text>
        <Text style={stylesSignUp.subtitle}>
          Please enter your bank information
        </Text>

        <View style={stylesSignUp.inputContainer}>
          <Text style={stylesSignUp.inputLabel}>Add Your Wallet Here</Text>
          <TextInput
            style={stylesSignUp.input}
            onChangeText={(text) => setWallet(text)}
            value={wallet}
            placeholder="Enter your wallet here"
            placeholderTextColor="#BFBFBF"
          />
        </View>

        <View style={stylesSignUp.inputContainer}>
          <Text style={stylesSignUp.inputLabel}>Select Your Bank</Text>
          <Picker
            selectedValue={selectedBank}
            style={styles.picker} {/* Cambiado a styles.picker */}
            onValueChange={(itemValue) => setSelectedBank(itemValue)}
          >
            <Picker.Item label="Select your bank" value="" />
            {colombianBanks.map((bank, index) => (
              <Picker.Item key={index} label={bank} value={bank} />
            ))}
          </Picker>
        </View>

        <View style={stylesSignUp.inputContainer}>
          <Text style={stylesSignUp.inputLabel}>Select Account Type</Text>
          <Picker
            selectedValue={accountType}
            style={styles.picker} {/* Cambiado a styles.picker */}
            onValueChange={(itemValue) => setAccountType(itemValue)}
          >
            <Picker.Item label="Select account type" value="" />
            <Picker.Item label="Ahorros" value="Ahorros" />
            <Picker.Item label="Corriente" value="Corriente" />
          </Picker>
        </View>

        <View style={stylesSignUp.inputContainer}>
          <Text style={stylesSignUp.inputLabel}>Account Number</Text>
          <TextInput
            style={stylesSignUp.input}
            onChangeText={(text) => setAccountNumber(text)}
            value={accountNumber}
            placeholder="Enter your account number"
            placeholderTextColor="#BFBFBF"
          />
        </View>

        <View style={stylesSignUp.button}>
          <ButtonColor navigation={navigation} to={"login"}>
            Get Started
          </ButtonColor>
        </View>
        <Text
          style={stylesSignUp.footerText}
          onPress={() => navigation.navigate("login")}
        >
          Already have an account?
          <Text style={stylesSignUp.signupTextBold}> Sign In</Text>
        </Text>
      </View>
    </View>
  </PageWrapper>
  )
}

export default SignUpView
