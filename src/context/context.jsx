import React, { createContext, useEffect, useMemo, useState } from "react"
import AuthService from "../services/AuthService"
import P2PService from "../services/P2PService"

// Crear el contexto
const MyContext = createContext()

// Componente proveedor del contexto
const MyContextProvider = ({ children }) => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [cellphone, setCellPhone] = useState("")
  const [password, setPassword] = useState("")
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [informationUser,setInformationUser]=useState()
  const $Auth = useMemo(() => new AuthService(), [])
  const [token,setToken]=useState()
  const $Exchange = useMemo(() => new P2PService(token), [])
  const [updatedOrder,setUpdatedOrder]=useState()
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
        setUpdatedOrder
      }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }
