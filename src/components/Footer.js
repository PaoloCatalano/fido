import React from "react"
import SocialLinks from "../constants/socialLinks"
import logo from "../assets/fido-logo-svg.svg"
import Image from "gatsby-image"

const Footer = ({ foto }) => {
  return (
    <footer className="footer">
        <section className="footer-container">
      <div>
      <h4>
        copyright&copy;{new Date().getFullYear()}{" "}
            <span>Alessandro Russo</span>{" "}P.Iva:05502960874{"  "}
        <img src={logo} alt="logo" className="logo" />
      </h4>
      </div>
      <div className="container-footer-links">
        <SocialLinks styleClass="footer-links" />
      </div>
        </section>
      <section>
        <Image fluid={foto} className="foto-footer" />
      </section>
    </footer>
  )
}

export default Footer
