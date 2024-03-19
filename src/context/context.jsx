import React, { createContext, useEffect, useMemo, useState } from "react"
import AuthService from "../services/AuthService"
import P2PService from "../services/P2PService"
import UserService from "../services/UserService"
import TicketService from "../services/TicketService"

// Crear el contexto
const MyContext = createContext()

// Componente proveedor del contexto
const MyContextProvider = ({ children }) => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [cellphone, setCellPhone] = useState("")
  const [password, setPassword] = useState("")
  const [referalCode, setReferalCode] = useState("")
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [informationUser, setInformationUser] = useState()
  const $Auth = useMemo(() => new AuthService(), [])
  const [token, setToken] = useState()
  const $Exchange = useMemo(() => new P2PService(token), [])
  const $Tickets = useMemo(() => new TicketService(token), [])
  const $User = useMemo(() => new UserService(token), [])
  const [messageSended, setMessageSended] = useState()
  const [updatedOrder, setUpdatedOrder] = useState()
  useEffect(() => {
    if (showErrorModal) {
      setTimeout(() => {
        setShowErrorModal(false)
        setErrorMessage("")
      }, 3000)
    }
  }, [showErrorModal])
  return (
    <MyContext.Provider
      value={{
        name,
        setName,
        lastName,
        setLastName,
        email,
        setEmail,
        cellphone,
        setCellPhone,
        password,
        setPassword,
        referalCode,
        setReferalCode,
        showErrorModal,
        setShowErrorModal,
        errorMessage,
        setErrorMessage,
        $Auth,
        $Exchange,
        token,
        setToken,
        informationUser,
        setInformationUser,
        updatedOrder,
        setUpdatedOrder,
        $User,
        $Tickets,
        messageSended,
        setMessageSended
      }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }
