import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform, 
  TouchableOpacity,
  Keyboard, 
  ActivityIndicator
} from "react-native"
import { Picker } from "@react-native-picker/picker"
import RNPickerSelect from 'react-native-picker-select';

import PageWrapper from "./PageWrapper"
import { MyContext } from "../context/context"
import ModalError from "./ModalError"
import ModalSuccess from "./ModalSuccess"

function ModalNewTicket({ setOpenModalTicket, onSubmit=()=>{} }) {
  const [selectedOption, setSelectedOption] = useState("")
  const [title, setTitle] = useState("")
  const [sending, setSending] = useState(false);
  const [description, setDescription] = useState("")
  const { $Tickets, token } = useContext(MyContext)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [succesMessage, setSuccesMessage] = useState("")
  const [openKeyBoard, setOpenKeyBoard] = useState(false)

  Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setOpenKeyBoard(true);
      }
  );

  Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setOpenKeyBoard(false);
      }
  );

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
    setSending(true);
    const { status, data } = await $Tickets.createTicket(token, formData)
    setSending(false);
    if (status) {
      setShowSuccessModal(true)
      setSuccesMessage("Ticket creado corréctamente")
      setTimeout(() => {
        setOpenModalTicket(false);
        onSubmit();
      }, 3000)
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
      }, 3000)
    }
  }, [succesMessage, showSuccessModal])
  return (
    <>
      {!showSuccessModal&&(<ModalSuccess succesMessage={true}>
        <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: ( Platform.OS === 'ios' && openKeyBoard ? -60 : 0),
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                width: "100%",
                height: "100%",
                padding: 10
              }}>
          {
            !sending ?
              (<>
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
                
                {
                  Platform.OS !== 'ios' ?
                  (<View style={{width: "100%", borderRadius: 20, backgroundColor: "#C3F53C", borderWidth: 1}}>
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
                          value="Seleccione el tipo de ticket"
                          disabled
                        />
                        <Picker.Item label="Change Wallet" value="change_wallet" />
                        <Picker.Item label="Change Account Bank" value="change_account_bank"/>
                      </Picker>
                  </View>)
                  :
                  (<RNPickerSelect
                      darkTheme={true}
                      value={selectedOption}
                      style={{
                        inputIOS: {
                          height: 40,
                          width: "100%",
                          borderColor: "gray",
                          borderWidth: 1,
                          marginVertical: 10,
                          paddingHorizontal: 10,
                          color: "white",
                          borderColor: "#C3F53C",
                          borderRadius: 10,
                          paddingRight: 30
                        }
                      }}
                      placeholder={{ label: 'Seleccione el tipo de ticket', value: "" }}
                      onValueChange={(value) => setSelectedOption(value)}
                      items={[
                          { label: 'Cambio de Wallet', value: 'change_wallet' },
                          { label: 'Cambio de cuenta bancaria', value: 'change_account_bank' }
                      ]}
                    />)
                }
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
                <View>
                  <TouchableOpacity
                    disabled={(!selectedOption||!title||!description)}
                    style={stylesTwo.button}
                    onPress={handleSendTicket}>
                    <Text style={stylesTwo.buttonText}>Crear</Text>
                  </TouchableOpacity>
                </View>
              </>)
              :
              (<>
                <ActivityIndicator size="small" color="#FFFFFF" />
              </>)
          }
        </View>
      </ModalSuccess>)}
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
    position: 'relative',
    borderRadius: 50,
    top: -15,
    left: '40%',
    width: 50
  }
})
const stylesTwo = StyleSheet.create({
  button: {
    width: 390,
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
