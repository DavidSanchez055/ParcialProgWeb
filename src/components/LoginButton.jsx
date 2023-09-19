import React from 'react'
import '../styles/login.css'
export const LoginButton = ({fnInicioSesion}) => {
  return (
    <button className="btn btn-primary" onClick={fnInicioSesion}>Login</button>
  )
}
