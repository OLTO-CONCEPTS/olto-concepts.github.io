module.exports = {
  siteMetadata: {
    title: "OLTO-dev",
    siteUrl: "https://www.oltoconcepts.com",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "react-bootstrap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-netlify-cache",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
        policy: [{ userAgent: 'Googlebot-Image', disallow: './src/images/screenshots' }]
      },
      __key: "images",
    },
  ],
};
