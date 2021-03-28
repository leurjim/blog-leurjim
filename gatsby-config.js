module.exports = {
  siteMetadata: {
    title: "Blog personal",
    description: "Mi blog personal",
    twitter: "myhandler",
    siteUrl: "https://example.com"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: `@theme-ui/preset-funk`,
        prismPreset: `prism-okaidia`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
