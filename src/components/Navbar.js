import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"

const Navbar = () => {
  return (
    <div>

        <Link to="/">
           <img src={logo}></img>
        </Link>
    </div>
  )
}

export default Navbar
