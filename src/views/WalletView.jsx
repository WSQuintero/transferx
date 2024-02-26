import React, { useState } from "react"
import ComingSoonServices from "../components/ComingSoonServices"
import FooterMenu from "../components/FooterMenu"
import { View } from "react-native"

function WalletView({navigation}) {
  const[openCard,setOpenCard]=useState(true)
  return (
    <>
    <View style={{height:"88%"}}>

    </View>
      <FooterMenu actual="services" navigation={navigation} />
      {openCard&&(
        <ComingSoonServices navigation={navigation} setOpenCard={setOpenCard} message={"La sección Wallet estará disponible muy pronto"} />
      )}
    </>
  )
}

export default WalletView
