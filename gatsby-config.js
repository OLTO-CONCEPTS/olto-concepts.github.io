module.exports = {
  siteMetadata: {
    title: "OLTO-dev",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "react-bootstrap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-netlify-cache",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
        
      },
      __key: "images",
    },
  ],
};
