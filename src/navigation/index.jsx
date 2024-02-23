import React, { useState } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Theme } from "../theme"
import useAuth from "../hooks/useAuth"
import EyesTypeSelector from "../views/EyesTypeSelector"
import { MyContextProvider, MyProvider } from "../context/context" // Importa MyProvider desde el contexto
import StylesTypeSelector from "../views/StylesTypeSelector"
import Congratulations from "../views/Congratulations"
import LoginView from "../views/LoginView"
import SignUpView from "../views/SignUpView"
import InitView from "../views/initView"
import ImageWithOverlay from "../components/ImageWithOverlay"
import StylistIA from "../views/StylistIA"
import ChatInput from "../components/ChatInput"
import OcassionsTypeSelector from "../views/OcassionsTypeSelector"
import ChatWithOptionsSection from "../views/ChatWithOptions"
import HistoryChat from "../views/HistoryChat"
import { NavigationContainer } from "@react-navigation/native"
import ConfirmationCodeView from "../views/ConfirmationCodeView"
import Dashboard from "../views/Dashboard"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const [user, { isAuthenticated }] = useAuth()
  const [currentRoute, setCurrentRoute] = useState("home")

  return (
    <NavigationContainer>
      {isAuthenticated() === true ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: Theme.colors.common.background }
          }}
          screenListeners={({ route }) => ({
            state: () => {
              setCurrentRoute(route.name)
            }
          })}>
        </Stack.Navigator>
      ) : (
        <MyContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: Theme.colors.common.background }
            }}>
            <Stack.Screen name="initview" component={InitView} />
            <Stack.Screen name="login" component={LoginView} />
            <Stack.Screen name="signup" component={SignUpView} />
            <Stack.Screen name="sectionTwo" component={ConfirmationCodeView} />
            {/* <Stack.Screen name="sectionTwo" component={StylistIA} /> */}
            <Stack.Screen name="sectionThree" component={Dashboard} />
            <Stack.Screen name="sectionFour" component={EyesTypeSelector} />
            <Stack.Screen name="sectionFive" component={StylesTypeSelector} />
            <Stack.Screen name="sectionSix" component={OcassionsTypeSelector} />
            <Stack.Screen name="sectionSeven" component={Congratulations} />
            <Stack.Screen name="sectionEight" component={ChatWithOptionsSection} />
            <Stack.Screen name="sectionNine" component={HistoryChat} />

          </Stack.Navigator>
        </MyContextProvider>
      )}
    </NavigationContainer>
  )
}

export default Navigation
