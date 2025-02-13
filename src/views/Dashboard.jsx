import React, { useContext, useState } from "react"
import ButtonColorNext from "../components/ButtonColorNext"
import { MyContext } from "../context/context"
import PageWrapper from "../components/PageWrapper"
import useLoadFonts from "../customHooks/useLoadFonts"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import stylesBodyTypeView from "../styles/stylesBodyTypeView"
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import CreditCardComponent from "../components/CreditCardComponent"
import HeaderDashboard from "../components/HeaderDashboard"
import QuickActionSection from "../components/QuickActionSection"
import RecentTransactions from "../components/RecentTransactions"
import FooterMenu from "../components/FooterMenu"
import ComingSoonCard from "../components/ComingSoonCard"

const Dashboard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  const { pageTellMeAboutYou, setPageTellMeAboutYou, informationUser } =
    useContext(MyContext)
  const fontsLoaded = useLoadFonts()
  const [openCard, setOpenCard] = useState(true)
  const handleCardPress = (index) => {
    setSelectedCard(index)
  }

  return (
    <>
      <PageWrapper>
        <HeaderDashboard informationUser={informationUser} />
        <CreditCardComponent />
        <QuickActionSection />
        <RecentTransactions navigation={navigation} />
        <FooterMenu actual={"card"} navigation={navigation} />
      </PageWrapper>
      {openCard && (
        <ComingSoonCard
          navigation={navigation}
          setOpenCard={setOpenCard}
          openCard={openCard}
          message={"La sección Card estará disponible muy pronto"}
        />
      )}
    </>
  )
}

export default Dashboard
