import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../Components/Login'
import Registro from '../Components/Registro'
import LandingPage from '../Components/LandingPage'
import PublicRouters from '../routes/PublicRouters'
import DashboardRouters from './DashboardRouters'
import PrivateRouters from './PrivateRouters'

const App = () => {

  const [checking, setChecking] = useState(true) // verifica, esta chequeando si esta  autenticado
  const [isLoggedIn, setIsLoggedIn] = useState(false) //verifica si esta autenticado

  useEffect(() => {
    const auth = getAuth() // validar si esta autenticado en firebase
    onAuthStateChanged(auth, (user) => { // que autentique si esa autenticacion existe
      if (user?.uid) { //? es para que cuando no lo encuentre no explote el programa 
        console.log(user);
        setIsLoggedIn(true) // la persona si esta autenticada

      } else {
        setIsLoggedIn(false) // si no se encontro nada siga en falso el estado es decir no esta autenticado
      }
      setChecking(false)
    })

  }, [setIsLoggedIn, setChecking])


  if (checking) {
    return (
      <h1>Espere...</h1>
    )
  }


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRouters isAuth={isLoggedIn}>
            <Login/>
          </PublicRouters>
        } />


        <Route path="/registro" element={
          <PublicRouters isAuth={isLoggedIn}>
            <Registro/>
          </PublicRouters>
        } />
        

        <Route path="/lading" element={
          <PublicRouters isAuth={isLoggedIn}>
            <LandingPage />
          </PublicRouters>
        } />


        <Route path="/*" element={
          <PrivateRouters isAuth={isLoggedIn}>
            <DashboardRouters />
          </PrivateRouters>} />


      </Routes>
    </BrowserRouter>

  )
}

export default App