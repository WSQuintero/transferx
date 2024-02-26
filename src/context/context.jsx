import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
const MyContext = createContext();

// Componente proveedor del contexto
const MyContextProvider = ({ children }) => {
  const [pageTellMeAboutYou,setPageTellMeAboutYou]=useState()
  const [dataSignUp,setDataSignUp]=useState({})

  useEffect(() => {
    console.log(dataSignUp);
  }, [dataSignUp]);
  return (
    <MyContext.Provider value={{ pageTellMeAboutYou,setPageTellMeAboutYou,dataSignUp,setDataSignUp }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
