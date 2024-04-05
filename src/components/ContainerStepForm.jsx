import React from "react"
import { View } from "react-native"

function ContainerStepForm({ children }) {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: "#C3F53C",
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center"
      }}>
      {children}
    </View>
  )
}

export default ContainerStepForm
