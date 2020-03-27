module.exports = {
  siteMetadata: {
    title: `Alma Vacations`,
    description: `This is the website of the Alma resort in Vietnam.`,
    author: `Arrow GTP`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-150454229-1',
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/content/news`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`Open Sans`, `Quicksand`, `Merienda One`]
        }
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'almavacations',
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/content`,
        languages: ['en', 'vi'],
        defaultLanguage: 'en',
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alma`,
        short_name: `Alma`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: 'minimal-ui',
        icon: `src/images/alma/alma-shell.svg`,
      },
    },
    `gatsby-plugin-offline`
  ]
};
