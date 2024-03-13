import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native"
import { Picker } from "@react-native-picker/picker"
import PageWrapper from "./PageWrapper"
import { MyContext } from "../context/context"
import ModalError from "./ModalError"
import ModalSuccess from "./ModalSuccess"

function ModalNewTicket({ setOpenModalTicket }) {
  const [selectedOption, setSelectedOption] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { $Tickets, token } = useContext(MyContext)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [succesMessage, setSuccesMessage] = useState("")
  const handleSendTicket = async () => {
    if (selectedOption === "Selecciona una opción" || !title || !description) {
      setErrorMessage("Por favor rellena todos los campos")
      setShowErrorModal(true)
      return
    }
    const formData = {
      type: selectedOption,
      title: title,
      description: description
    }
    const { status, data } = await $Tickets.createTicket(token, formData)
    if (status) {
      setShowSuccessModal(true)
      setSuccesMessage("Ticket creado corréctamente")
      setTimeout(() => {
        setOpenModalTicket(false)
      }, 2000)
    }
  }

  useEffect(() => {
    if (errorMessage && showErrorModal) {
      setTimeout(() => {
        setErrorMessage("")
        setShowErrorModal(false)
      }, 2000)
    }
  }, [errorMessage, showErrorModal])

  useEffect(() => {
    if (showSuccessModal && succesMessage) {
      setTimeout(() => {
        setShowSuccessModal(false)
        setSuccesMessage("")
      }, 2000)
    }
  }, [succesMessage, showSuccessModal])
  return (
    <>
      <PageWrapper>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            width: "100%",
            height: "100%",
            padding: 10
          }}>
          <View
            style={{
              width: "100%",
              borderRadius: 20,
              backgroundColor: "#C3F53C",
              borderWidth: 1
            }}>
            <Picker
              style={{
                backgroundColor: "transparent",
                color: "black"
              }}
              selectedValue={selectedOption}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedOption(itemValue)
              }
              itemStyle={{ color: "white" }}>
              <Picker.Item
                label="Select"
                value="Selecciona una opción"
                disabled
              />
              <Picker.Item label="Change Wallet" value="change_wallet" />
              <Picker.Item
                label="Change Account Bank"
                value="change_account_bank"
              />
            </Picker>
          </View>
          <TextInput
            style={{
              height: 40,
              width: "100%",
              borderColor: "gray",
              borderWidth: 1,
              marginVertical: 10,
              paddingHorizontal: 10,
              color: "white",
              borderColor: "#C3F53C",
              borderRadius: 10
            }}
            placeholder="Título de solicitud"
            placeholderTextColor={"white"}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={{
              height: 80,
              borderColor: "gray",
              borderWidth: 1,
              marginVertical: 10,
              paddingHorizontal: 10,
              color: "white",
              width: "100%",
              borderColor: "#C3F53C",
              borderRadius: 10
            }}
            placeholder="Descripción de solicitud"
            placeholderTextColor={"white"}
            multiline
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOpenModalTicket(false)
            }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center"
              }}>
              X
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={stylesTwo.button}
              onPress={handleSendTicket}>
              <Text style={stylesTwo.buttonText}>Crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </PageWrapper>
      <ModalError errorMessage={errorMessage} showErrorModal={showErrorModal} />
      <ModalSuccess
        showSuccessModal={showSuccessModal}
        succesMessage={succesMessage}
      />
    </>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    top: 0,
    right: 20,
    width: 50
  }
})
const stylesTwo = StyleSheet.create({
  button: {
    width: 350,
    height: 50,
    backgroundColor: "#C3F53C",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#05000F",
    fontSize: 14,
    fontFamily: "Roboto",

    fontWeight: "bold"
  }
})
export default ModalNewTicket
