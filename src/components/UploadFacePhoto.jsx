import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { MaterialIcons } from "@expo/vector-icons"
import StylesKYC from "../styles/StylesKYC"

function UploadFacePhoto({
  selectedImage,
  setSelectedImage,
  handleNext,
  handleBack
}) {
  // Función para manejar la selección de una imagen desde la galería
  const pickImageFromGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      })
      if (!result.cancelled) {
        setSelectedImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log("Error picking image:", error)
    }
  }

  // Función para manejar la selección de una imagen desde la cámara
  const pickImageFromCamera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      })

      if (!result.cancelled) {
        setSelectedImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log("Error picking image from camera:", error)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
  }

  return (
    <View style={StylesKYC.containerId}>
      <Text style={StylesKYC.title}>Política KYC</Text>
      <Text style={StylesKYC.paragraph}>
        Por favor, sube o toma dos fotos claras de tu rostro, sin gorras, gafas
        ni ningún elemento adicional.
      </Text>
      <TouchableOpacity
        onPress={selectedImage ? removeImage : pickImageFromGallery}>
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
          <TouchableOpacity onPress={pickImageFromGallery}>
            <Image
              source={require("../../assets/form/face_placeholder.jpg")}
              style={StylesKYC.imageId}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {!selectedImage && (
        <TouchableOpacity
          style={StylesKYC.cameraButton}
          onPress={pickImageFromCamera}>
          <MaterialIcons
            name="photo-camera"
            size={24}
            color="white"
            style={{ alignSelf: "center" }}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={StylesKYC.nextButton} onPress={handleBack}>
        <Text style={StylesKYC.nextButtonText}>Atras</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          StylesKYC.nextButton,
          !selectedImage && StylesKYC.disabledButton
        ]}
        onPress={handleNext}
        disabled={!selectedImage}>
        <Text style={StylesKYC.nextButtonText}>Validar</Text>
      </TouchableOpacity>
    </View>
  )
}

export { UploadFacePhoto }
