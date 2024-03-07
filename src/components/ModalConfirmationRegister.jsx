import React from "react"
import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native"

function ModalConfirmationRegister({
  showModalConfirmationRegister,
  confirmationRegisterMessage,
  onConfirm,
  onCancel
}) {
  return (
    <Modal
      visible={showModalConfirmationRegister}
      animationType="slide"
      transparent={true}>
      <View style={stylesModalConfirmationRegister.modalContainer}>
        <View style={stylesModalConfirmationRegister.modalContent}>
          <Text style={stylesModalConfirmationRegister.modalTitle}>
            Confirmar
          </Text>
          <Text style={stylesModalConfirmationRegister.modalMessage}>
            {confirmationRegisterMessage}
          </Text>
          <View style={stylesModalConfirmationRegister.modalButtonsContainer}>
            <TouchableOpacity
              onPress={onConfirm}
              style={stylesModalConfirmationRegister.modalButton}>
              <Text style={stylesModalConfirmationRegister.modalButtonText}>
                Confirmar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onCancel}
              style={[
                stylesModalConfirmationRegister.modalButton,
                { backgroundColor: "#fff" }
              ]}>
              <Text style={stylesModalConfirmationRegister.modalButtonText}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalConfirmationRegister

const stylesModalConfirmationRegister = StyleSheet.create({
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
  modalButton: {
    backgroundColor: "#C3F53C",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    width: "100%",
    color: "#10231D"
  },
  modalButtonCancel: {
    backgroundColor: "#fff", // Cambia el color del botón Cancelar
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    width: "100%"
  },
  modalButtonText: {
    color: "#10231D",
    textAlign: "center",
    fontSize: 14
  },
  modalButtonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%"
  }
})
