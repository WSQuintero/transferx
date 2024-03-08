import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { MaterialIcons } from "@expo/vector-icons"
import StylesKYC from "../styles/StylesKYC"

function UploadIdPhoto({ selectedImage, setSelectedImage, handleNext }) {
  // Función para manejar la selección de una imagen desde el explorador de archivos
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      })

      if (!result.cancelled) {
        console.log("Image URI:", result.assets[0].uri)
        setSelectedImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log("Error picking image:", error)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
  }

  return (
    <View style={StylesKYC.containerId}>
      <Text style={StylesKYC.title}>Política KYC</Text>
      <Text style={StylesKYC.paragraph}>
        Por favor sube foto lo más clara posible de tu documento de
        identificación
      </Text>
      <TouchableOpacity onPress={pickImage}>
        {selectedImage ? (
          <>
            <Image source={{ uri: selectedImage }} style={StylesKYC.imageId} />
            <TouchableOpacity
              style={StylesKYC.deleteButton}
              onPress={removeImage}>
              <MaterialIcons name="close" size={24} color="white" />
            </TouchableOpacity>
          </>
        ) : (
          <Image
            source={require("../../assets/form/id_document_placeholder.png")}
            style={StylesKYC.imageId}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          StylesKYC.nextButton,
          !selectedImage && StylesKYC.disabledButton
        ]}
        onPress={handleNext}
        disabled={!selectedImage}>
        <Text style={StylesKYC.nextButtonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  )
}

export { UploadIdPhoto }
