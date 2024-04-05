import React, { useState } from "react"
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native"
import * as DocumentPicker from "expo-document-picker"

function MultipleFileInput({ handleSubmit, selectedFiles, setSelectedFiles }) {
  const namedParameters = {
    multiple: true
  }
  const selectFiles = async () => {
    const file = await DocumentPicker.getDocumentAsync(namedParameters)

    setSelectedFiles((prev) => [...prev, ...file.assets])
    console.log(file.assets)
  }

  return (
    <View style={styles.container}>
      {selectedFiles.length > 0 && (
        <View>
          <Text style={styles.subtitle}>Archivos seleccionados:</Text>
          {selectedFiles.map((file, index) => (
            <Text style={{ color: "white" }} key={index}>
              {file.name}
            </Text>
          ))}
        </View>
      )}
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TouchableOpacity style={styles.button} onPress={selectFiles}>
          <Text style={styles.buttonText}>Cargar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MultipleFileInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10231D",
    paddingHorizontal: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#C3F53C",
    marginBottom: 20,
    marginTop: 20
  },
  button: {
    backgroundColor: "#C3F53C",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
    width: 130
  },
  buttonText: {
    color: "#10231D",
    fontSize: 14,
    fontWeight: "bold"
  }
})
