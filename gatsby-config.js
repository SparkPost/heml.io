module.exports = {
  siteMetadata: {
    title: `HEML`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/docs`,
        name: 'docs',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
          }
        ]
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'GTM-5Q6TX6G',
      },
    },
    `gatsby-plugin-netlify`
  ],
}
