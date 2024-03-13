import React, { useContext, useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"
import PageWrapper from "../components/PageWrapper"
import RecentTransactions from "../components/RecentTransactions"
import BackButton from "../components/BackButton"
import { MyContext } from "../context/context"
import FooterMenu from "../components/FooterMenu"
import { View } from "react-native"
import ModalPendingValidate from "../components/ModalPendingValidate"

function RecentTransactionsView({ navigation }) {
  const { $Exchange, token, updatedOrder, informationUser } =
    useContext(MyContext)
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState()
  const [changedHash, setChangedHash] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [elseEmailValidated, setElseEmailValidated] = useState(true)
  const [elseCellphoneValidated, setElseCellphoneValidated] = useState(true)

  useEffect(() => {
    if (token) {
      const getOrders = async () => {
        setLoading(true);
        const { status, data } = await $Exchange.p2pGetAllRequest(token)

        if (status) {
          setOrders(data.data)
        } else {
          console.log(data)
        }
        setLoading(false);
      }

      getOrders()
    }
  }, [$Exchange, token, changedHash, updatedOrder])

  useEffect(() => {
    if (Number(informationUser?.user?.email_validated) === 0) {
      setElseEmailValidated(false)
    }
    if (Number(informationUser?.user?.cellphone_verifed) === 0) {
      setElseCellphoneValidated(false)
    }
  }, [informationUser?.user])

  useEffect(() => {
    if (!elseEmailValidated || !elseCellphoneValidated) {
      setShowSuccessModal(true)
    }
  }, [elseEmailValidated, elseCellphoneValidated])

  return (
    <PageWrapper>
      {
        !loading
        ?
        (<RecentTransactions
          navigation={navigation}
          orders={orders}
          exchange={$Exchange}
          token={token}
          setChangedHash={setChangedHash}
          setOrders={setOrders}
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

export default RecentTransactionsView
