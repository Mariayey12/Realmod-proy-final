import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouters = ({isAuth, children}) => {
  return isAuth 
  ? children
  : <Navigate to="/lading"/>
}

export default PrivateRouters