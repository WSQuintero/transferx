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
  const handleVerifyPhotos = async () => {
    const body = new FormData()

    // Agregar los archivos con diferentes nombres bajo la misma clave "faces"
    body.append("faces", selectedImageId)
    body.append("faces", selectedImagePhoto)
    body.append("faces", selectedImagePhotoTwo)

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
