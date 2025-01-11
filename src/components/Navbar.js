import React from 'react'
import Logo from '../Assests/logo-removebg-preview.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-img">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-list">
        <ul className="list-items">
          <NavLink to='/' className="list-link">Home</NavLink>
          <NavLink to='/recipe' className="list-link">Recipe</NavLink>
          <NavLink to='/contact' className="list-link">Contact</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar