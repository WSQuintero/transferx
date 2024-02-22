import React, { createContext, useState } from 'react';

// Crear el contexto
const MyContext = createContext();

// Componente proveedor del contexto
const MyContextProvider = ({ children }) => {
  const [pageTellMeAboutYou,setPageTellMeAboutYou]=useState()

  return (
    <MyContext.Provider value={{ pageTellMeAboutYou,setPageTellMeAboutYou }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
