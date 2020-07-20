/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "FIDO pet service",
    description: "Il sito web di Fido dog sitter",
    author: "@Fido",
    twitterUsername: "@PaoroCatarano",
    image: "/twitter-image.png",
    siteUrl: "https://fidodogsitter.netlify.app/",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // displayName: false
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poiret One`,
            variants: [`400`, `1000`]
          },
          {
            family: `Contrail One`,
            variants: [`400`, `900`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 10
        contentTypes: [`Dogs`, `Foto-footers`, `Foto-profilos`],
        singleTypes: [`About`],
      }
    },
  ],
}
