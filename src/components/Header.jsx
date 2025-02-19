import React from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import { HashLink } from 'react-router-hash-link'
const Header = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <main>
        <HashLink to={"/#home"} >Home</HashLink>
        <HashLink to={"/#about"} >About Us</HashLink>
        <Link to={"/services"} >Services</Link>
        <Link to={"/contact"} >Contact me</Link> 
      </main>
      <button>Login</button>
    </nav>
  )
}

export default Header;