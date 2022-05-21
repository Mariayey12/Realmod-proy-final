import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Propiedades  from '../Components/Propiedades'
import Home from '../Components/Home'
import NavBars from '../Components/NavBars'
import MapView from "../Components/MapView";




const DashboardRouters = () => {
  return (
    <div>
      <>
      <NavBars/>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/addPropiedad" element={<Propiedades/>}/>
          <Route path="/map">
          <MapView />;
        </Route>
        <Route path="/">
          <Home />
        </Route>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    
      </>
    </div>
  )
}

export default DashboardRouters