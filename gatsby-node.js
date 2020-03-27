// const { createFilePath } = require('gatsby-source-filesystem')
// const path = require('path')
// const languages = ['en', 'vi'] // plugin options

// function flattenMessages(nestedMessages, prefix = '') {
//   return Object.keys(nestedMessages).reduce((messages, key) => {
//     let value = nestedMessages[key]
//     let prefixedKey = prefix ? `${prefix}.${key}` : key

//     if (typeof value === 'string') {
//       messages[prefixedKey] = value
//     } else {
//       Object.assign(messages, flattenMessages(value, prefixedKey))
//     }

//     return messages
//   }, {})
// }

// const basicPages = new Map()
// // Programmatically create the pages for browsing blog posts (Create Page!)
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   const getMessages = (path, language) => {
//     try {
//       // TODO load yaml here
//       const messages = require(`${path}/${language}.json`)

//       return flattenMessages(messages)
//     } catch (error) {
//       if (error.code === "MODULE_NOT_FOUND") {
//         process.env.NODE_ENV !== "test" &&
//           console.error(
//             `[gatsby-plugin-intl] couldn't find file "${path}/${language}.json"`
//           )
//       }

//       throw error
//     }
//   }

//   /**
//    * News Content
//    */
//   const news = await graphql(`
//     query {
//       allMdx(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         filter: { frontmatter: { category: { eq: "news" } } }
//       )
//       {
//         edges {
//           node {
//             id
//             excerpt(pruneLength: 100)
//             frontmatter {
//               title
//               author
//               language
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   // Handle errors
//   if (news.errors) {
//     reporter.panicOnBuild('🚨 Error while running GraphQL(news) query.')
//     return
//   }
//   console.log('news', news)
//   // you'll call `createPage` for each result
//   news.data.allMdx.edges.forEach(({ node }, index) => {
//     let slug = node.fields.slug
//     basicPages.set(`${slug}`, {})
//     createPage({
//       path: slug,
//       // This component will wrap our MDX content
//       component: path.resolve(`./src/templates/article.js`),
//       context: {
//         id: node.id,
//         slug: slug,
//         prev: index - 1,
//         next: index + 1,
//         category: 'news',
//         // ADD INITL CONTEXT AT HERE
//         intl: {
//           language: node.frontmatter.language,
//           languages,
//           messages: getMessages('./src/content/news/', node.frontmatter.language),
//           routed: true,
//           originalPath: slug.substr(3), // remove front /en or /vi strings
//           redirect: false,
//         },
//       },
//     })
//   })
// }

// // Create Slug!
// exports.onCreateNode = async ({
//   node,
//   actions,
//   getNode,
//   store,
//   cache,
//   createNodeId,
// }) => {
//   const { createNodeField, createNode } = actions
//   if (node.internal.type === 'Mdx') {
//     const value = createFilePath({ node, getNode })
//     const newSlug =
//       '/' + node.frontmatter.language + '/' + value
//     createNodeField({
//       // Individual MDX node
//       node,
//       // Name of the field you are adding
//       name: 'slug',
//       // Generated value based on filepath with "news" prefix
//       value: newSlug,
//     })
//   }
// }

// // remove duplicated init pages
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   // console.log('page.context.type', page.context.type)
//   const isBasicPage = page.context.type === 'basic'
//   const hasInvalidBlogPath = !basicPages.has(page.path)

//   // If page is a blog page but has the wrong path
//   if (isBasicPage && hasInvalidBlogPath) {
//     deletePage(page)
//   }
// }