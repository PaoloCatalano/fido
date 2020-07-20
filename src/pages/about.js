import React from "react"
import Layout from "../components/Layout"
import Services from "../components/Services"
import SEO from "../components/SEO"
import Image from "gatsby-image"
import Title from "../components/Title"
import { graphql } from "gatsby"

const About = ({ data, title }) => {
  const {
    footer: {
      image: {
        childImageSharp: { fluido },
      },
    },
    about: {
      nodes
    }
  } = data

const { info, image} = nodes[0]

  return (
    <Layout foto={fluido}>
      <SEO title={title || "Info"} description="about page di Fido"/>
      <section className="about-page">
        <div className="about-container">
          <Title title={title} />
        <Image fluid={image.childImageSharp.fluid} className="foto-profilo" />
        <p>{info}</p>
        </div>
      </section>
      <Services title="servizi forniti"/>
    </Layout>
  )
}

export const query = graphql`
  {
    footer: strapiFotoFooters {
      image {
        childImageSharp {
          fluido: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    about: allStrapiAbout {
      nodes {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        info
      }
    }
  }
`

export default About
