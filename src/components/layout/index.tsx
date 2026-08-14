import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Navigate, Outlet } from 'react-router'

export default function Layout() {
  const isAuthenticate = true
  
  if(!isAuthenticate) {
    return (
      <Navigate to="/login" />
    )
  }

  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}
