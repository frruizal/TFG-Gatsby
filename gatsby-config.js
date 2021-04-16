module.exports = {
  siteMetadata: {
    title: `Generación incremental de páginas estáticas con Gatsby y Drupal`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `fruizalejos@hiberus.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl:`http://172.22.0.8/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#639`,
        theme_color: `#639`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the
                                            // root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline
    // functionality To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}