import React, { useState } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import useAuth from "../hooks/useAuth"
import { MyContextProvider, MyProvider } from "../context/context" // Importa MyProvider desde el contexto
import LoginView from "../views/LoginView"
import SignUpView from "../views/SignUpView"
import InitView from "../views/InitView"
import { NavigationContainer } from "@react-navigation/native"
import ConfirmationCodeView from "../views/ConfirmationCodeView"
import Dashboard from "../views/Dashboard"
import RecentTransactionsView from "../views/RecentTransactionsView"
import SelectInformationBankView from "../views/SelectInformationBankView"
import Exchange from "../views/Exchange"
import ContactView from "../views/ContactView"
import ServicesView from "../views/ServicesView"
import WalletView from "../views/WalletView"
import DialogKYC from "../components/DialogKYC"
import Sarlaft from "../components/Sarlaft"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#07140f" }
          }}>
          {/* <Stack.Screen name="InitView" component={InitView} />
          <Stack.Screen name="login" component={LoginView} />
          <Stack.Screen name="signup" component={SignUpView} />
          <Stack.Screen
            name="SelectInformationBankView"
            component={SelectInformationBankView}
          /> */}
          <Stack.Screen
            name="confirmationCode"
            component={ConfirmationCodeView}
          />
          <Stack.Screen name="exchange" component={RecentTransactionsView} />
          <Stack.Screen name="wallet" component={WalletView} />
          <Stack.Screen name="newExchange" component={Exchange} />
          <Stack.Screen name="services" component={ServicesView} />
          <Stack.Screen name="card" component={Dashboard} />
          <Stack.Screen name="contact" component={ContactView} />
          <Stack.Screen name="dialog" component={DialogKYC} />
          <Stack.Screen name="sarlaft" component={Sarlaft} />
        </Stack.Navigator>
      </MyContextProvider>
    </NavigationContainer>
  )
}

export default Navigation
