import React from 'react'
import { Navigate } from 'react-router-dom'

const publicRouters = ({isAuth, children}) => {
  return !isAuth
  ?children
  :<Navigate to="/*"/>
}

export default publicRouters