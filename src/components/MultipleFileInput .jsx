import React, { useState } from "react"
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native"
import * as DocumentPicker from "expo-document-picker"

function MultipleFileInput({ selectedFiles, setSelectedFiles }) {
  const namedParameters = {
    multiple: true
  }
  const selectFiles = async () => {
    const file = await DocumentPicker.getDocumentAsync(namedParameters)

    setSelectedFiles(file.assets)
    console.log(file.assets)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={selectFiles}>
        <Text style={styles.buttonText}>Cargar archivos</Text>
      </TouchableOpacity>
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
    </View>
  )
}

export default MultipleFileInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10231D",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#C3F53C",
    marginBottom: 20,
    marginTop: 50
  },
  button: {
    backgroundColor: "#C3F53C",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#10231D",
    fontSize: 18,
    fontWeight: "bold"
  }
})
