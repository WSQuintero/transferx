import React, { createContext, useEffect, useMemo, useState } from "react"
import AuthService from "../services/AuthService"

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
  const $Auth = useMemo(() => new AuthService(), [])


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
        $Auth
      }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }
