import React from "react"
import SociaLinks from "../constants/socialLinks"
import Image from "gatsby-image"
import Title from "../components/Title"

const Hero = ({ foto, title }) => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <div>
          <div className="hero-container">
            <Image fluid={foto} className="foto-sfondo" />
            <article className="hero-info">
              <Title title={title} />
              <h4>Alessandro Russo, Dog Sitter e Dog Walker</h4>
              <div className="underline"></div>
              <SociaLinks />
            </article>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
