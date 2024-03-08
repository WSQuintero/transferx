import React, { useContext, useState } from "react"
import { UploadIdPhoto } from "../components/UploadIdPhoto"
import { Text, View } from "react-native"
import BackButton from "./BackButton"
import StylesKYC from "../styles/StylesKYC"
import { UploadFacePhoto } from "./UploadFacePhoto"
import UserService from "../services/UserService"
import { MyContext } from "../context/context"

function DialogKYC({ navigation }) {
  const { $User, informationUser, token } = useContext(MyContext)
  const [selectedImageId, setSelectedImageId] = useState(null)
  const [selectedImagePhoto, setSelectedImagePhoto] = useState(null)
  const [selectedImagePhotoTwo, setSelectedImagePhotoTwo] = useState(null)
  const [sectionPhoto, setSectionPhoto] = useState()

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

    body.append("faces", selectedImageId)
    body.append("faces", selectedImagePhoto)
    body.append("faces", selectedImagePhotoTwo)
    navigation.navigate("newExchange")

    // const { status, data } = await $User.sendKYC(token, body)

    // if (status) {
    //   navigation.navigate("newExchange")
    // }

    // return status
  }

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
    </View>
  )
}

export default DialogKYC
