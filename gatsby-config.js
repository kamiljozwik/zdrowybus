module.exports = {
  siteMetadata: {
    title: 'ZdrowyBus',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/img`,
      name: 'img',
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: 
      [
        {
          resolve: `gatsby-remark-relative-images`,
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
      ],
    }
  },
  
  /*{
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      // modulePath: `${__dirname}/src/cms/cms.js`,
    },
  },*/
  'gatsby-plugin-netlify', // make sure to keep it last in the array
],
}
