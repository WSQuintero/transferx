import React, { useContext, useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import RecentTransactions from "../components/RecentTransactions"
import BackButton from "../components/BackButton"
import { MyContext } from "../context/context"
import FooterMenu from "../components/FooterMenu"
import { View } from "react-native"
import ModalPendingValidate from "../components/ModalPendingValidate"
import RecentTickets from "../components/RecentTickets"

function Tickets({ navigation }) {
  const { token, updatedOrder, informationUser, $Tickets } =
    useContext(MyContext)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [elseEmailValidated, setElseEmailValidated] = useState(true)
  const [elseCellphoneValidated, setElseCellphoneValidated] = useState(true)
  const [tickets, setTickets] = useState()

  useEffect(() => {
    const getTickets = async () => {
      if (token) {
      }
      const { status, data } = await $Tickets.getTickets(token)

      if (status) {
        setTickets(data.data)
      } else {
        console.log(data)
      }
    }
    getTickets()
  }, [$Tickets, token])

  return (
    <PageWrapper>
      <RecentTickets
        navigation={navigation}
        token={token}
        tickets={tickets}
        setTickets={setTickets}
      />
      <FooterMenu actual="exchange" navigation={navigation} />
      <ModalPendingValidate
        showSuccessModal={showSuccessModal}
        succesMessage={
          "No has verificado tu correo o teléfono. Si requieres cambiarlo, haz clic en el botón de abajo."
        }
        setShowSuccessModal={setShowSuccessModal}
        elseEmailValidated={elseEmailValidated}
        elseCellphoneValidated={elseCellphoneValidated}
        navigation={navigation}
      />
    </PageWrapper>
  )
}

export default Tickets
