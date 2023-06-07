import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <div>
      <nav className="nav justify-content-start bg-primary  ">
        <NavLink className={({isActive})=> isActive ? 'bg-danger text-light' : 'nav-link text-light'} to="">Home</NavLink>
        <NavLink className={({isActive})=> isActive ? 'bg-danger text-light' : 'nav-link text-light'} to="contact">Contact</NavLink>
        <NavLink className={({isActive})=> isActive ? 'bg-danger text-light' : 'nav-link text-light'} to="about">About</NavLink>
      </nav>

    </div>
  )
}
