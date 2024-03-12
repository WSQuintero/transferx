import React, { useContext, useEffect, useState } from "react"
import { UploadIdPhoto } from "../components/UploadIdPhoto"
import { Text, View } from "react-native"
import BackButton from "./BackButton"
import StylesKYC from "../styles/StylesKYC"
import { UploadFacePhoto } from "./UploadFacePhoto"
import UserService from "../services/UserService"
import { MyContext } from "../context/context"
import ModalError from "./ModalError"

function DialogKYC({ navigation }) {
  const { $User, informationUser, token } = useContext(MyContext)
  const [selectedImageId, setSelectedImageId] = useState(null)
  const [selectedImagePhoto, setSelectedImagePhoto] = useState(null)
  const [selectedImagePhotoTwo, setSelectedImagePhotoTwo] = useState(null)
  const [sectionPhoto, setSectionPhoto] = useState()
  const [showErrorModal, setShowErrorModal] = useState(false)

  const handleNext = () => {
    setSectionPhoto(false)
  }

  const handleBack = () => {
    setSectionPhoto(undefined)
  }
  const handleBackSecondImage = () => {
    setSectionPhoto(false)
  }
  const handleNextSecondImage = () => {
    setSectionPhoto(true)
  }
  const convertToBlob = async (imageUri) => {
    try {
      const response = await fetch(imageUri)
      if (!response.ok) {
        throw new Error("Failed to fetch image")
      }
      const blob = await response.blob()
      return blob
    } catch (error) {
      console.error("Error al convertir la imagen en Blob:", error)
      throw error
    }
  }

  const getFileExtension = (filename) => {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2)
  }

  const getMimeType = (extension) => {
    switch (extension.toLowerCase()) {
      case "jpg":
      case "jpeg":
        return "image/jpeg"
      case "png":
        return "image/png"
      case "gif":
        return "image/gif"
      // Agrega más extensiones de archivo y tipos MIME según sea necesario
      default:
        return "application/octet-stream" // Tipo MIME predeterminado para archivos desconocidos
    }
  }

  const handleVerifyPhotos = async () => {
    const body = new FormData()

    try {
      // Convertir las imágenes seleccionadas en objetos Blob
      const blobImageId = await convertToBlob(selectedImageId)
      const blobImagePhoto = await convertToBlob(selectedImagePhoto)
      const blobImagePhotoTwo = await convertToBlob(selectedImagePhotoTwo)

      // Agregar los objetos Blob al FormData con nombres de clave "faces"
      body.append("faces", {
        uri: selectedImageId,
        name: "imageId." + getFileExtension(selectedImageId),
        type: getMimeType(getFileExtension(selectedImageId))
      })
      body.append("faces", {
        uri: selectedImagePhoto,
        name: "imagePhoto." + getFileExtension(selectedImagePhoto),
        type: getMimeType(getFileExtension(selectedImagePhoto))
      })
      body.append("faces", {
        uri: selectedImagePhotoTwo,
        name: "imagePhotoTwo." + getFileExtension(selectedImagePhotoTwo),
        type: getMimeType(getFileExtension(selectedImagePhotoTwo))
      })

      // Llamar a la función sendKYC para enviar los datos al servidor
      const { status, data } = await $User.sendKYC(token, body)
      if (status) {
        if (informationUser?.user?.sarlaft_validated === 1) {
          navigation.navigate("newExchange")
        } else {
          navigation.navigate("sarlaft")
        }
      } else {
        setShowErrorModal(true)
      }
      return status
    } catch (error) {
      console.error("Error al enviar los datos al servidor:", error)
      throw error
    }
  }

  useEffect(() => {
    if (showErrorModal) {
      setTimeout(() => {
        setShowErrorModal(false)
      }, 2000)
    }
  }, [showErrorModal])
  return (
    <View style={StylesKYC.container}>
      <View style={StylesKYC.containerBack}>
        <BackButton />
      </View>
      {sectionPhoto === undefined ? (
        <>
          <Text style={StylesKYC.alert}>
            ¡Para crear una orden, necesitamos la siguiente información!
          </Text>

          <UploadIdPhoto
            selectedImage={selectedImageId}
            setSelectedImage={setSelectedImageId}
            handleNext={handleNext}
          />
        </>
      ) : sectionPhoto === false ? (
        <UploadFacePhoto
          handleBack={handleBack}
          selectedImage={selectedImagePhoto}
          setSelectedImage={setSelectedImagePhoto}
          handleNext={handleNextSecondImage}
        />
      ) : (
        <UploadFacePhoto
          handleBack={handleBackSecondImage}
          selectedImage={selectedImagePhotoTwo}
          setSelectedImage={setSelectedImagePhotoTwo}
          handleNext={handleVerifyPhotos}
        />
      )}
      <ModalError
        showErrorModal={showErrorModal}
        errorMessage={
          "Hubo un error al validar tus fotografías, por favor, inténtalo de nuevo"
        }></ModalError>
    </View>
  )
}

export default DialogKYC
