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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.oltoconcepts.com',
        sitemap: 'https://www.oltoconcepts.com/sitemap.xml',
        policy: [{ userAgent: 'Googlebot-Image', disallow: './src/images', allow: './src/images/hqlogo.jpg' }]
      }
    },
  ],
};
