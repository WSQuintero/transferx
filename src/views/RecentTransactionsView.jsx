import React from 'react'
import PageWrapper from '../components/PageWrapper'
import RecentTransactions from '../components/RecentTransactions'
import BackButton from '../components/BackButton'

function RecentTransactionsView({navigation}) {
  return (
<PageWrapper>
  <BackButton/>
  <RecentTransactions navigation={navigation}/>
</PageWrapper>
    )
}

export default RecentTransactionsView