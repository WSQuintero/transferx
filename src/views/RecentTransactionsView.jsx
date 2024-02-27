import React, { useContext, useEffect, useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import RecentTransactions from '../components/RecentTransactions'
import BackButton from '../components/BackButton'
import {MyContext} from "../context/context"
import FooterMenu from '../components/FooterMenu'
import { View } from 'react-native'

function RecentTransactionsView({navigation}) {
  const {$Exchange,token}=useContext(MyContext)
  const [orders,setOrders]=useState()
  useEffect(()=>{

    const getOrders=async()=>{
      const {status,data}=await $Exchange.p2pGetAllRequest(token)

      if(status){
        setOrders(data.data)
      }else{
        console.log(data)

      }
    }

    if($Exchange&&token){
      getOrders()
    }
  },[$Exchange,token])

  return (
<PageWrapper>
  <RecentTransactions navigation={navigation} orders={orders}/>
  <FooterMenu actual="exchange" navigation={navigation} />

</PageWrapper>
    )
}

export default RecentTransactionsView