import React, { useContext, useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import RecentTransactions from "../components/RecentTransactions"
import BackButton from "../components/BackButton"
import { MyContext } from "../context/context"
import FooterMenu from "../components/FooterMenu"
import { View, ActivityIndicator } from "react-native"
import ModalPendingValidate from "../components/ModalPendingValidate"
import RecentTickets from "../components/RecentTickets"

function Tickets({ navigation }) {
  const { token, updatedOrder, informationUser, $Tickets } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [elseEmailValidated, setElseEmailValidated] = useState(true)
  const [elseCellphoneValidated, setElseCellphoneValidated] = useState(true)
  const [tickets, setTickets] = useState()

  useEffect(() => {
    const getTickets = async () => {
      setLoading(true);
      const { status, data } = await $Tickets.getTickets(token)
      setLoading(false);
      setReload(false);

      if (status) {
        setTickets(data.data)
      } else {
        console.log(data)
      }
    }
    if(reload===true) getTickets()
  }, [$Tickets, token, reload])

  return (
    <PageWrapper>
      {!loading?
        (<RecentTickets
          navigation={navigation}
          token={token}
          onSubmit={()=>setReload(true)}
          tickets={tickets}
          setTickets={setTickets}
        />)
        :
        (<View style={{flex: 1, marginTop: 100}}>
          <ActivityIndicator size="small" color="#FFFFFF" />
        </View>)
      }
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
