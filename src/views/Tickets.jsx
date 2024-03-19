import React, { useContext, useEffect, useState } from "react"
import PageWrapper from "../components/PageWrapper"
import { MyContext } from "../context/context"
import FooterMenu from "../components/FooterMenu"
import { View, ActivityIndicator } from "react-native"
import RecentTickets from "../components/RecentTickets"

function Tickets({ navigation }) {
  const { token, $Tickets, messageSended, informationUser } =
    useContext(MyContext)
  const [loading, setLoading] = useState(true)
  const [reload, setReload] = useState(true)
  const [tickets, setTickets] = useState()

  useEffect(() => {
    const getTickets = async () => {
      setLoading(true)
      const { status, data } = await $Tickets.getTickets(token)
      setLoading(false)
      setReload(false)

      if (status) {
        setTickets(data.data)
      } else {
        console.log(data)
      }
    }
    if (messageSended) getTickets()
    if (reload === true) getTickets()
  }, [$Tickets, token, reload, messageSended])

  return (
    <PageWrapper>
      {!loading ? (
        <RecentTickets
          navigation={navigation}
          token={token}
          onSubmit={() => setReload(true)}
          tickets={tickets}
          setTickets={setTickets}
          informationUser={informationUser}
        />
      ) : (
        <View style={{ flex: 1, marginTop: 100 }}>
          <ActivityIndicator size="small" color="#FFFFFF" />
        </View>
      )}
      <FooterMenu actual="exchange" navigation={navigation} />
    </PageWrapper>
  )
}

export default Tickets
