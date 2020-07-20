import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import RandomDog from "../components/RandomDog"
import SEO from "../components/SEO"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  const {
    profilo: {
      foto: {
        childImageSharp: { fluid },
      },
    },
    footer: {
      image: {
        childImageSharp: { fluido },
      },
    },
    dogs: {nodes}
  } = data
//  nodes[0].display = false
//   console.log(nodes[0].display);

  return (
    <Layout foto={fluido} title="fido">
      <SEO title="Home" description="questa è la home page di Fido"/>
      <Hero foto={fluid} title="fido"/>
      <Services title="servizi forniti"/>
      <RandomDog dogs={nodes} title="" />
      <div className="pre-footer">
      <Link to="/dogs" className="btn center-btn">
        altri cagnolini
        </Link>
      </div>
      <div className="underline"></div>
    </Layout>
  )
}
export const query = graphql`
{
  profilo: strapiFotoProfilos {
      foto {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    footer: strapiFotoFooters {
      image {
        childImageSharp {
          fluido: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    dogs: allStrapiDogs {
      nodes {
        strapiId
        desc
        display
        nome
        razza
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `
  //allStrapiDogs(filter: {display: {eq: true}}) === compare solo Ciccio
