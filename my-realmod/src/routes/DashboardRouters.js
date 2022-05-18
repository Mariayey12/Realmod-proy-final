import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Propiedades  from '../Components/Propiedades'
import Home from '../components/Home'
import NavBars from '../Components/NavBars'



const DashboardRouters = () => {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addPropie" element={<Propiedades/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      <NavBars/>
      </>
    </div>
  )
}

export default DashboardRouters