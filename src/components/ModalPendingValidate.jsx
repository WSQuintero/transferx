import React, { useContext, useState } from "react"
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native"
import CellphonePicker from "./CellphonePicker"
import stylesSignUp from "../styles/stylesSignUp"
import { MyContext } from "../context/context"

function ModalPendingValidate({
  showSuccessModal,
  succesMessage,
  setShowSuccessModal,
  elseEmailValidated,
  elseCellphoneValidated,
  navigation
}) {
  const [cellPhone, setCellPhone] = useState()
  const [newEmail, setNewEmail] = useState("")
  const { $Auth, token, ...more } = useContext(MyContext)

  const handleValidate = async () => {
    const { status, data } = await $Auth.resendConfirmationCode(
      { cellPhone },
      token
    )

    if (status) {
      more.setCellPhone(cellPhone)
      navigation.navigate("confirmationCode")
    }
  }

  let message = ""
  let input = null
  console.log(elseCellphoneValidated)
  if (!elseEmailValidated && !elseCellphoneValidated) {
    message = "No has validado ni tu correo ni tu teléfono."
  } else if (!elseEmailValidated) {
    message = "No has validado tu correo."
    input = (
      <TextInput
        style={stylesModalPendingValidate.input}
        value={newEmail}
        onChangeText={setNewEmail}
        placeholder="Nuevo correo"
      />
    )
  } else if (!elseCellphoneValidated) {
    message = "No has validado tu teléfono."
    input = (
      <View style={stylesSignUp.textInputContainer}>
        <CellphonePicker setCellPhone={setCellPhone} />
      </View>
    )
  }

  return (
    <Modal visible={showSuccessModal} animationType="slide" transparent={true}>
      <View style={stylesModalPendingValidate.modalContainer}>
        <View style={stylesModalPendingValidate.modalContent}>
          <Text style={stylesModalPendingValidate.modalTitle}>
            Por favor confirma
          </Text>
          <Text style={stylesModalPendingValidate.modalMessage}>{message}</Text>
          {input && (
            <View style={stylesModalPendingValidate.inputContainer}>
              <Text style={stylesModalPendingValidate.label}>
                {message === "No has validado tu correo."
                  ? "Modificar correo"
                  : "Modificar celular"}
              </Text>
              {input}
            </View>
          )}
          <View style={stylesModalPendingValidate.buttonContainer}>
            <TouchableOpacity
              style={stylesModalPendingValidate.modalButton}
              onPress={handleValidate}>
              <Text style={stylesModalPendingValidate.modalButtonText}>
                Enviar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesModalPendingValidate.modalButton}
              onPress={() => setShowSuccessModal(false)}>
              <Text style={stylesModalPendingValidate.modalButtonText}>
                Cerrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalPendingValidate

const stylesModalPendingValidate = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro transparente
    paddingHorizontal: 20
  },
  modalContent: {
    backgroundColor: "#10231D",
    borderRadius: 10,
    padding: 20,
    width: "80%", // Ancho del modal
    justifyContent: "center",
    alignItems: "center"
  },
  modalTitle: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#C3F53C",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center" // Alineación del texto al centro
  },
  modalMessage: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#F4F3F5",
    textAlign: "center",
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%"
  },
  label: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#F4F3F5",
    marginBottom: 5
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
    color: "#000000"
  },
  modalButton: {
    backgroundColor: "#C3F53C",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10
  },
  modalButtonText: {
    color: "#10231D",
    textAlign: "center",
    fontSize: 14
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    gap: 5
  }
})
