import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Dogs from "../components/Dogs"
import { graphql, Link } from "gatsby"

const DogsPage = ({ data }) => {
  const {
    footer: {
      image: {
        childImageSharp: { fluido },
      },
    },
    dogs: { nodes: dogs },
  } = data
  
  return (
    <Layout foto={fluido}>
      <SEO title="Dogs" description="Dogs page di Fido"/>
      <Dogs dogs={dogs} />
      <Link to="/" className="btn center-btn">
        torna alla Home Page
          </Link>
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

export default DogsPage
