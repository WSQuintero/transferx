import React from "react"
import CardHistoryChat from "../components/CardHistoryChat"
import { View, Text } from "react-native"
import PageWrapper from "../components/PageWrapper"
import { Image } from "react-native"
import BackButton from "../components/BackButton"
import useLoadFonts from "../customHooks/useLoadFonts"
import stylesHistoryChat from "../styles/stylesHistoryChat"

const HistoryChat = () => {
  const fontsLoaded = useLoadFonts()

  return (
    <PageWrapper>
      <View style={stylesHistoryChat.imageContainer}>
        <Image
          source={require("../../assets/favicon.png")}
          style={stylesHistoryChat.favicon}
        />
      </View>
      <View style={stylesHistoryChat.backButton}>
        <BackButton />
      </View>
      <View style={stylesHistoryChat.container}>
        <Text style={stylesHistoryChat.title}>Chat History</Text>
        <CardHistoryChat title="Outfit Evaluation" date="" time="10:00 AM" />
        <CardHistoryChat title="Styling Tips" date="" time="2:30 PM" />
        <CardHistoryChat
          title="Shopping Recommendations"
          date=""
          time="5 days ago"
        />
        <CardHistoryChat
          title="Shopping Recommendations "
          date=""
          time="Jan 12 ,2024"
        />
        <CardHistoryChat
          title="Casual vs. Formal Wear Advice"
          date=""
          time="Jan 5 ,2024"
        />
        <CardHistoryChat
          title="Color Coordination Tips"
          date=""
          time="Dec 12, 2023"
        />
        <CardHistoryChat
          title="Fashion Etiquette Questions"
          date=""
          time="Nov 8, 2023"
        />
      </View>
    </PageWrapper>
  )
}

export default HistoryChat
