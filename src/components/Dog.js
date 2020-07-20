import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

const Dog = ({ desc, display, nome, razza, image }) => {

  return <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
        )}
    <div className="project-info service">
        <h2>{nome}</h2>
      <div className="underline"></div>
    <p className="project-desc">{desc}</p>
    <div className="project-stack"><span>{razza}</span></div>
    </div>
  </article>
}

Dog.propTypes = {
  nome: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Dog
