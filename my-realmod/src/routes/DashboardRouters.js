import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Propiedades  from '../Components/Propiedades'
import Home from '../Components/Home'
import NavBars from '../Components/NavBars'
import MapView from "../Components/MapView";
import "../style/App.css"



const DashboardRouters = () => {
  return (
    <div>
      <>
      <NavBars/>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/addPropiedad" element={<Propiedades/>}/>
          <Route path="/map"   element={<MapView />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </>
    </div>
  )
}

export default DashboardRouters