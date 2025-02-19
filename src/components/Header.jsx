import React from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <main>
        <Link to={"/"} >Home</Link>
        <a href={"/#about"} >About Us</a>
        <Link to={"/services"} >Services</Link>
        <Link to={"/#contact"} >Contact me</Link> 
      </main>
      <button>Login</button>
    </nav>
  )
}

export default Header;