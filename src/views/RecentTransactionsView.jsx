import React, { useContext, useEffect, useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import RecentTransactions from '../components/RecentTransactions'
import BackButton from '../components/BackButton'
import {MyContext} from "../context/context"

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

    getOrders()
  },[])

  return (
<PageWrapper>
  <BackButton/>
  <RecentTransactions navigation={navigation} orders={orders}/>
</PageWrapper>
    )
}

export default RecentTransactionsView