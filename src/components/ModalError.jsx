import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'

function ModalError({showErrorModal,errorMessage}) {
  return (
    <Modal visible={showErrorModal} animationType="slide" transparent={true}>
    <View style={stylesModalError.modalContainer}>
      <View style={stylesModalError.modalContent}>
        <Text style={stylesModalError.modalTitle}>Error</Text>
        <Text style={stylesModalError.modalMessage}>{errorMessage}</Text>
      </View>
    </View>
  </Modal>
  )
}

export default ModalError

const stylesModalError = StyleSheet.create({
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
    backgroundColor: "#2d2ade",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  modalButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14
  }
})