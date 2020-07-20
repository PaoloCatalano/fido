import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql, Link } from "gatsby"

const Error = ({data}) =>{
    const {
        footer: {
            image: {
                childImageSharp: { fluido },
            },
        },
    } = data

    return (
        <Layout foto={fluido}>
            <SEO />
            <h1>Questa pagina non esiste... </h1>
        <Link to="/" className="btn">
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
  }
`
export default Error

