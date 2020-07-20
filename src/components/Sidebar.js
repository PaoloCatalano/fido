import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { GiCrossedBones } from "react-icons/gi"
import Title from "../components/Title"

const Sidebar = ({ isOpen, toggleSidebar, title }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <GiCrossedBones />
      </button>
      <div className="side-container">
        <Title title={title}/>
      <Links styleClass={`${isOpen ? "sidebar-links" : ""}`}/>
      <div className="underline"></div>
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`}/>
      </div>
    </aside>
  )
}

export default Sidebar
