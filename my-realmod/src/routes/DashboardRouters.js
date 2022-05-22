import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Propiedades  from '../Components/Propiedades'
import Feactures  from '../Components/Featured'
import Home from '../Components/Home'
import NavBars from '../Components/NavBars'
import "../style/App.css"
import About from '../Components/About'
import Contact from '../Components/Contac'



const DashboardRouters = () => {
  return (
    <div>
      <>
      <NavBars/>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/addPropiedad" element={<Propiedades/>}/>
          <Route path="/addFeactured" element={<Feactures/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contactano" element={<Contact/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </>
    </div>
  )
}

export default DashboardRouters