import React, { useState, useRef, useEffect } from "react"
import { View, TextInput } from "react-native"
import PhoneInput from "react-native-phone-input"
import stylesSignUp from "../styles/stylesSignUp"

function CellphonePicker({ setCellPhone }) {
  const [pickerData, setPickerData] = useState([])
  const phoneRef = useRef(null)

  useEffect(() => {
    if (phoneRef.current) {
      setPickerData(phoneRef.current.getPickerData())
    }
  }, []) // Este efecto se ejecuta solo una vez después del primer renderizado

  return (
    <View style={stylesSignUp.containerphone}>
      <PhoneInput
        ref={phoneRef}
        initialCountry={"co"}
        initialValue=""
        textProps={{
          placeholder: "Enter a phone number...",
          placeholderTextColor: "#FFFFFF",
          style: {
            color: "#FFFFFF"
          }
        }}
        onChangePhoneNumber={(phoneNumber) => setCellPhone(phoneNumber)}
      />
    </View>
  )
}

export default CellphonePicker
