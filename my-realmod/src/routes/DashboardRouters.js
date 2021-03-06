import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Propiedades  from '../Components/Propiedades'
import Feactures  from '../Components/Featured'
import Home from '../Components/Home'
import NavBars from '../Components/NavBars'
import "../style/App.css"
import About from '../Components/About'
import Contact from '../Components/Contac'
import Agente from '../Components/Agente'


const DashboardRouters = () => {
  return (
    <div>
      <>
      <NavBars/>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/addPropiedad" element={<Propiedades/>}/>
          <Route path="/addFeactured" element={<Feactures/>}/>
          <Route path="/addAgente" element={<Agente/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </>
    </div>
  )
}

export default DashboardRouters