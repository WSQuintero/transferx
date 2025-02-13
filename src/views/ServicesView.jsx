import React, { useState } from "react"
import ComingSoonServices from "../components/ComingSoonServices"
import FooterMenu from "../components/FooterMenu"
import { View } from "react-native"

function ServicesView({navigation}) {
  const[openCard,setOpenCard]=useState(true)
  return (
    <>
    <View style={{height:"88%"}}>

    </View>
      <FooterMenu actual="services" navigation={navigation} />
      {openCard&&(
        <ComingSoonServices navigation={navigation} setOpenCard={setOpenCard} message={"Los servicios estarán disponibles muy pronto "}/>
      )}
    </>
  )
}

export default ServicesView
