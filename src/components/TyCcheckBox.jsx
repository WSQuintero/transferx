import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const TyCcheckBox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <TouchableOpacity onPress={toggleCheckBox} style={styles.container}>
      <View style={[styles.checkBox, isChecked && styles.checkedBackground]}>
        {isChecked && <AntDesign name="check" size={18} color="white" />}
      </View>
      <Text style={styles.text}>
        By signing up you agree to our{" "}
        <Text style={{ color: "#2d2ade" }}>Term of use</Text> &{" "}
        <Text style={{ color: "#2d2ade" }}>privacy notice </Text>
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:20
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  checkedBackground: {
    backgroundColor: "#2d2ade"
  },
  text: {
    fontSize: 12,
    color: "#828282",
    width:300
  }
})

export default TyCcheckBox
