import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div>
      Header
      <NavLink to={'/'} >Home</NavLink>
      <NavLink to={'/about'} >About</NavLink>
    </div>
  )
}
