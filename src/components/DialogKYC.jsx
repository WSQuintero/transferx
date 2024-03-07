import React, { useContext, useState } from "react"
import { UploadIdPhoto } from "../components/UploadIdPhoto"
import { Text, View } from "react-native"
import BackButton from "./BackButton"
import StylesKYC from "../styles/StylesKYC"
import { UploadFacePhoto } from "./UploadFacePhoto"
import UserService from "../services/UserService"
import { MyContext } from "../context/context"

function DialogKYC() {
  const { $User } = useContext(MyContext)
  const [selectedImageId, setSelectedImageId] = useState(null)
  const [selectedImagePhoto, setSelectedImagePhoto] = useState(null)
  const [sectionPhoto, setSectionPhoto] = useState(false)

  const handleNext = () => {
    setSectionPhoto(true)
  }

  const handleBack = () => {
    setSectionPhoto(false)
  }

  const handleVerifyPhotos = async () => {
    const body = new FormData()

    body.append("faces", selectedImageId)
    body.append("faces", selectedImagePhoto)

    // const { status } = await $User.sendKYC(body)

    // if (status) {
    //   console.log("KYC aprobado")
    // }

    console.log(body)
    // return status
  }

  return (
    <View style={StylesKYC.container}>
      <View style={StylesKYC.containerBack}>
        <BackButton />
      </View>
      {!sectionPhoto ? (
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
      ) : (
        <UploadFacePhoto
          handleBack={handleBack}
          selectedImage={selectedImagePhoto}
          setSelectedImage={setSelectedImagePhoto}
          handleNext={handleVerifyPhotos}
        />
      )}
    </View>
  )
}

export default DialogKYC
