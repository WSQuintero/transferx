import React, { useContext, useEffect, useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import RecentTransactions from '../components/RecentTransactions'
import BackButton from '../components/BackButton'
import {MyContext} from "../context/context"
import FooterMenu from '../components/FooterMenu'
import { View } from 'react-native'

function RecentTransactionsView({navigation}) {
  const {$Exchange,token,updatedOrder}=useContext(MyContext)
  const [orders,setOrders]=useState()
  const[changedHash,setChangedHash]=useState(false)

  useEffect(()=>{

    const getOrders=async()=>{
      const {status,data}=await $Exchange.p2pGetAllRequest(token)

      if(status){
        setOrders(data.data)
      }else{
        console.log(data)

      }
    }

      getOrders()

  },[$Exchange,token,changedHash,updatedOrder])

  return (
<PageWrapper>
  <RecentTransactions navigation={navigation} orders={orders} exchange={$Exchange} token={token} setChangedHash={setChangedHash} setOrders={setOrders}/>
  <FooterMenu actual="exchange" navigation={navigation} />

</PageWrapper>
    )
}

export default RecentTransactionsView