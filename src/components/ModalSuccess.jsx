import React from "react"
import { Modal, StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from "react-native"

function ModalSuccess({ title="Success", showSuccessModal, succesMessage, onClose, children, inputTextDisabled }) {
  return (
    <Modal visible={showSuccessModal} animationType="slide" transparent={true}>
      {children?
        (children)
        :
        (<View style={stylesModalSuccess.modalContainer}>
          <View style={stylesModalSuccess.modalContent}>
          <Text style={stylesModalSuccess.modalTitle}>{title}</Text>
          <Text style={stylesModalSuccess.modalMessage}>{succesMessage}</Text>
          {inputTextDisabled&&(<TextInput
              style={stylesModalSuccess.inputHash}
              value={inputTextDisabled}
              multiline={true}
              disabled={true}
              onKeyPress={(event) => {
                if (event.nativeEvent.key === 'Enter') {
                  Keyboard.dismiss()
                }
              }}
            />)}
          {onClose&&(<View style={stylesModalSuccess.buttonContainer}>
            <TouchableOpacity
              style={stylesModalSuccess.modalButton}
              onPress={onClose}>
              <Text style={stylesModalSuccess.modalButtonText}>
                Ok
              </Text>
            </TouchableOpacity>
          </View>)}
          </View>
        </View>)
      }
    </Modal>
  )
}

export default ModalSuccess

const stylesModalSuccess = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro transparente
    paddingHorizontal: 20
  },
  inputHash: {
    height: 45,
    width: 250,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    marginTop: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    gap: 5
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
  modalButton: {
    backgroundColor: "#2d2ade",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  modalButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14
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
})
