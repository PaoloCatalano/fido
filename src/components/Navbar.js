import React from "react"
import logo from "../assets/fido-logo-svg.svg"
import Links from "../constants/links"
import { FaPaw } from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <Links styleClass="nav-links"></Links>
      <button type="button" className="toggle-btn" onClick={toggleSidebar}>
        <FaPaw></FaPaw><h6>MENU</h6>
      </button>
    </nav>
  )
}

export default Navbar
