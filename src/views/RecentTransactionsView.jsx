import React, { useContext, useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import RecentTransactions from '../components/RecentTransactions'
import BackButton from '../components/BackButton'
import {MyContext} from "../context/context"

function RecentTransactionsView({navigation}) {
  const {$Exchange,token}=useContext(MyContext)

  useEffect(()=>{
    const getOrders=async()=>{
      const {status,data}=await $Exchange.p2pRequest(token)

      if(status){
        console.log(data)
      }else{
        console.log(data)

      }
    }

    getOrders()
  },[])

  return (
<PageWrapper>
  <BackButton/>
  <RecentTransactions navigation={navigation}/>
</PageWrapper>
    )
}

export default RecentTransactionsView