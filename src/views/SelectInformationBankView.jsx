import React, { useContext, useEffect, useState } from "react"
import { View, Text, TextInput, Image, ScrollView } from "react-native"
import { Picker } from "@react-native-picker/picker"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import ButtonColor from "../components/ButtonColor"
import SelectInformationBankViewStyle from "../styles/SelectInformationBankViewStyle"
import { MyContext } from "../context/context"
import ModalError from "../components/ModalError"

const SelectInformationBankView = ({ navigation }) => {
  const [wallet, setWallet] = useState("")
  const [selectedBank, setSelectedBank] = useState("")
  const [selectedIdBank, setIdSelectedBank] = useState("")
  const [accountType, setAccountType] = useState("")
  const [idType, setIdType] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [titularName, setTitularName] = useState("")
  const [numberId, setNumberId] = useState("")
  const {
    $Exchange,
    token,
    setErrorMessage,
    setShowErrorModal,
    showErrorModal,
    errorMessage
  } = useContext(MyContext)
  const [colombianBanks, setColombianBanks] = useState()
  const idTypes = ["id", "Passport"]

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const { status, data } = await $Exchange.getBanks(token)

        if (status) {
          setColombianBanks(data.data)
        } else {
          console.log("Error fetching banks")
        }
      } catch (error) {
        console.error("Error fetching banks:", error)
      }
    }

    fetchBanks()
  }, [$Exchange, token])

  const validation = async () => {
    if (
      !wallet ||
      !selectedBank ||
      !accountType ||
      !accountNumber ||
      !titularName ||
      !idType
    ) {
      setErrorMessage("Todos los campos deben estar llenos")
      setShowErrorModal(true)
      return false
    }

    const validateTronWalletAddress = (address) => {
      const addressTronExpReg = /^T[0-9a-zA-Z]{33}$/
      return addressTronExpReg.test(address)
    }

    if (!validateTronWalletAddress(wallet)) {
      setErrorMessage("La dirección de la billetera TRON no es válida")
      setShowErrorModal(true)
      return false
    }

    return true
  }

  const handleUpdateInformationBank = async () => {
    if (!validation()) return

    const {status,data} = await $Exchange.updateWallet(token, wallet)
    if(status){
      const informationBankUpdateResult = await $Exchange.updateInformationBank(
        token,
        {
          id_bank_transfer_out: selectedIdBank,
          type_account_bank_transfer: accountType ==="Ahorros"?"debit":"current",
          id_type_owner_account_bank_transfer: idType,
          id_number_owner_account_bank_transfer: numberId, // Corregido
          number_account_bank_transfer: accountNumber,
          owner_account_bank_transfer: titularName
        }
      )

      if (informationBankUpdateResult.status) {
        navigation.navigate("exchange")
      } else {
        console.log(informationBankUpdateResult.data)
      }
    }



  }

  return (
    <PageWrapper>
      <View style={SelectInformationBankViewStyle.container}>
        <BackButton style={SelectInformationBankViewStyle.backButton} />
        <View style={SelectInformationBankViewStyle.centerContent}>
          <Image
            source={require("../../assets/image.png")}
            style={{ width: "50%", resizeMode: "contain" }}
          />

          <Text style={SelectInformationBankViewStyle.title}>
            Information Bank
          </Text>
          <Text style={SelectInformationBankViewStyle.subtitle}>
            Please enter your bank information
          </Text>
          <ScrollView>
            <View style={SelectInformationBankViewStyle.inputContainer}>
              <Text style={SelectInformationBankViewStyle.inputLabel}>
                Add Your Wallet Here
              </Text>
              <TextInput
                style={SelectInformationBankViewStyle.input}
                onChangeText={(text) => setWallet(text)}
                value={wallet}
                placeholder="Enter your wallet here"
                placeholderTextColor="#BFBFBF"
              />
            </View>
            <View style={SelectInformationBankViewStyle.inputContainer}>
              <Text style={SelectInformationBankViewStyle.inputLabel}>
                Add Your name
              </Text>
              <TextInput
                style={SelectInformationBankViewStyle.input}
                onChangeText={(text) => setTitularName(text)}
                value={titularName}
                placeholder="Nombre de titular"
                placeholderTextColor="#BFBFBF"
              />
            </View>
            <View style={SelectInformationBankViewStyle.inputContainer}>
              <Text style={SelectInformationBankViewStyle.inputLabel}>
                Select Your type id
              </Text>
              <Picker
                selectedValue={idType}
                style={SelectInformationBankViewStyle.picker}
                onValueChange={(itemValue) => setIdType(itemValue)}>
                <Picker.Item label="Select your type id" value="" />
                {idTypes?.map((idType, index) => (
                  <Picker.Item key={index} label={idType} value={idType} />
                ))}
              </Picker>
            </View>

            <View style={SelectInformationBankViewStyle.inputContainer}>
              <Text style={SelectInformationBankViewStyle.inputLabel}>
                Número de documento
              </Text>
              <TextInput
                style={SelectInformationBankViewStyle.input}
                onChangeText={(text) => setNumberId(text)}
                value={numberId}
                placeholder="Enter owner ID number"
                placeholderTextColor="#BFBFBF"
              />
            </View>
            <View style={SelectInformationBankViewStyle.inputContainer}>
              <Text style={SelectInformationBankViewStyle.inputLabel}>
                Select Your Bank
              </Text>
              <Picker
                selectedValue={selectedBank}
                style={SelectInformationBankViewStyle.picker}
                onValueChange={(itemValue, itemIndex) => {
                  const selectedBank = colombianBanks.find(
                    (bank) => bank.name === itemValue
                  )
                  setSelectedBank(itemValue)
                  setIdSelectedBank(selectedBank ? selectedBank.id : "")
                }}>
                <Picker.Item label="Select your bank" value="" />
                {colombianBanks?.map((bank) => (
                  <Picker.Item
                    key={bank.id}
                    label={bank.name}
                    value={bank.name}
                  />
                ))}
              </Picker>
            </View>

            <View style={SelectInformationBankViewStyle.inputContainer}>
              <Text style={SelectInformationBankViewStyle.inputLabel}>
                Select Account Type
              </Text>
              <Picker
                selectedValue={accountType}
                style={SelectInformationBankViewStyle.picker}
                onValueChange={(itemValue) => setAccountType(itemValue)}>
                <Picker.Item label="Select account type" value="" />
                <Picker.Item label="Ahorros" value="Ahorros" />
                <Picker.Item label="Corriente" value="Corriente" />
              </Picker>
            </View>

            <View style={SelectInformationBankViewStyle.inputContainer}>
              <Text style={SelectInformationBankViewStyle.inputLabel}>
                Account Number
              </Text>
              <TextInput
                style={SelectInformationBankViewStyle.input}
                onChangeText={(text) => setAccountNumber(text)}
                value={accountNumber}
                placeholder="Enter your account number"
                placeholderTextColor="#BFBFBF"
              />
            </View>

            <View style={SelectInformationBankViewStyle.button}>
              <ButtonColor
                navigation={navigation}
                handleSignUp={handleUpdateInformationBank}>
                Enviar información
              </ButtonColor>
            </View>
          </ScrollView>
        </View>
      </View>
      <ModalError showErrorModal={showErrorModal} errorMessage={errorMessage} />
    </PageWrapper>
  )
}

export default SelectInformationBankView
