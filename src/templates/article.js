// import React from 'react'
// import { graphql } from 'gatsby'
// import styled from 'styled-components'
// import { injectIntl } from 'gatsby-plugin-intl'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { MDXProvider } from '@mdx-js/react'
// import Img from 'gatsby-image'
// import SEO from "../components/seo"
// import './article.css'

// import Content from '../components/layout/Content'

// const TitleBlock = styled.div`
//   margin: 0;
//   padding: 0;
//   z-index: 8;
//   grid-column: 1 / 4;
//   /* grid-row: 1; */
//   /* width: 100%; */
//   height: 100vh;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(3, 1fr);
//   background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
//     background-repeat: repeat;
// `

// const TitleText = styled.div`
//   grid-column: 1 / 4;
//   grid-row: 1 / 4;
//   align-self: center;
//   justify-self: center;
//   z-index: 3;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// const Title = styled.h1`
//   margin: 0 0 1rem 0;
//   padding: 0;
//   text-shadow: 0px 0px 8px hsla(360, 100%, 100%, 1);
//   font-size: calc(48px + (96 - 48) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'Caveat', sans-serif;
//   font-weight: normal;
//   color: #000;
// `

// const Subtitle = styled.h2`
//   margin: 1rem 0 0 0;
//   padding: 0;
//   text-shadow: 0px 0px 8px hsla(360, 100%, 100%, 1);
//   font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'Avenir Next', 'Open Sans', sans-serif;
//   font-weight: 400;
//   color: #000;
// `

// const Date = styled.h3`
//   margin: 1rem 0 0 0;
//   padding: 0;
// `

// const TitleImage = styled(Img)`
//   grid-column: 1 / 4;
//   grid-row: 1 / 4;
//   margin: 0;
//   padding: 0;
//   object-fit: cover;
//   z-index: 0;
//   mask-image: linear-gradient(
//     to top,
//     hsla(0, 0%, 100%, 0) 0%,
//     hsla(0, 0%, 100%, 0.013) 8.1%,
//     hsla(0, 0%, 100%, 0.049) 15.5%,
//     hsla(0, 0%, 100%, 0.104) 22.5%,
//     hsla(0, 0%, 100%, 0.175) 29%,
//     hsla(0, 0%, 100%, 0.259) 35.3%,
//     hsla(0, 0%, 100%, 0.352) 41.2%,
//     hsla(0, 0%, 100%, 0.45) 47.1%,
//     hsla(0, 0%, 100%, 0.55) 52.9%,
//     hsla(0, 0%, 100%, 0.648) 58.8%,
//     hsla(0, 0%, 100%, 0.741) 64.7%,
//     hsla(0, 0%, 100%, 0.825) 71%,
//     hsla(0, 0%, 100%, 0.896) 77.5%,
//     hsla(0, 0%, 100%, 0.951) 84.5%,
//     hsla(0, 0%, 100%, 0.987) 91.9%,
//     hsl(0, 0%, 100%) 100%)
//   ;
//   padding-bottom: 0;
// `

// // const TitleScrim = styled.div`
// //   grid-column: 1 / 4;
// //   grid-row: 1 / 4;
// //   width: 100%;
// //   height: 100%;
// //   height: 100vh;
// //   background: linear-gradient(
// //     to top,
// //   hsl(0, 0%, 0%) 0%,
// //   hsla(0, 0%, 0%, 0.738) 19%,
// //   hsla(0, 0%, 0%, 0.541) 34%,
// //   hsla(0, 0%, 0%, 0.382) 47%,
// //   hsla(0, 0%, 0%, 0.278) 56.5%,
// //   hsla(0, 0%, 0%, 0.194) 65%,
// //   hsla(0, 0%, 0%, 0.126) 73%,
// //   hsla(0, 0%, 0%, 0.075) 80.2%,
// //   hsla(0, 0%, 0%, 0.042) 86.1%,
// //   hsla(0, 0%, 0%, 0.021) 91%,
// //   hsla(0, 0%, 0%, 0.008) 95.2%,
// //   hsla(0, 0%, 0%, 0.002) 98.2%,
// //   hsla(0, 0%, 0%, 0) 100%);
// //   background: linear-gradient(
// //     to bottom,
// //     hsla(0, 0%, 100%, 0) 0%,
// //     hsla(0, 0%, 100%, 0.013) 8.1%,
// //     hsla(0, 0%, 100%, 0.049) 15.5%,
// //     hsla(0, 0%, 100%, 0.104) 22.5%,
// //     hsla(0, 0%, 100%, 0.175) 29%,
// //     hsla(0, 0%, 100%, 0.259) 35.3%,
// //     hsla(0, 0%, 100%, 0.352) 41.2%,
// //     hsla(0, 0%, 100%, 0.45) 47.1%,
// //     hsla(0, 0%, 100%, 0.55) 52.9%,
// //     hsla(0, 0%, 100%, 0.648) 58.8%,
// //     hsla(0, 0%, 100%, 0.741) 64.7%,
// //     hsla(0, 0%, 100%, 0.825) 71%,
// //     hsla(0, 0%, 100%, 0.896) 77.5%,
// //     hsla(0, 0%, 100%, 0.951) 84.5%,
// //     hsla(0, 0%, 100%, 0.987) 91.9%,
// //     hsl(0, 0%, 100%) 100%);
// //   z-index: 1;
// // `

// const MainContentSection = styled.div`
//   grid-column: 2 / 3;
//   padding: 1rem 0;
//   margin-top: -192px;
//   z-index: 2000;
// `

// // const Content = styled.div`
// //   p {
// //     /* font-family: sans-serif; */
// //     line-height: 1.5;
// //     font-size: 18px;
// //   }
// // `

// // const Content = styled(MDXRenderer)`
// //   p {
// //     /* font-family: sans-serif; */
// //     line-height: 1.5;
// //     font-size: 22px;
// //   }
// // `

// // const TOC = styled.div`
// //   position: fixed;
// //   background: lightgrey;
// //   margin: 0;
// //   padding: 2rem;
// //   box-sizing: border-box;
// //   font-size: 2rem;
// // `

// // const components = {
// //   h1: props => <h1 id={slugify(props.children)} {...props}/>,
// //   h2: props => <h2 id={slugify(props.children)} {...props}/>,
// //   h3: props => <h3 id={slugify(props.children)} {...props}/>,
// //   h4: props => <h4 id={slugify(props.children)} {...props}/>,
// //   h5: props => <h5 id={slugify(props.children)} {...props}/>,
// //   h6: props => <h6 id={slugify(props.children)} {...props}/>
// // }

// // const renderItem = item => (
// //   <li key={item.title}>
// //     {item.items ? (
// //       <ul>
// //         <a href={item.url}>{item.title}</a>
// //         {item.items.map(renderItem)}
// //       </ul>
// //     ) : (
// //       <a href={item.url}>{item.title}</a>
// //     )}
// //   </li>
// // )

// // const renderItem = item => (
// //   <li key={item.title}>
// //     {item.items ? (
// //       <Collapsible trigger={item.title}>
// //         <a href={item.url}>{item.title}</a>
// //         {item.items.map(renderItem)}
// //       </Collapsible>
// //     ) : (
// //       <a href={item.url}>{item.title}</a>
// //     )}
// //   </li>
// // )

// const Article = ({ data }) => {
//   const { frontmatter, body } = data.mdx
//   return (
//     <Content>
//       <SEO title={frontmatter.title} />
//       <MDXProvider>
//         <TitleBlock>
//           <TitleText>
//             <Title>{frontmatter.title}</Title>
//             <Subtitle>{frontmatter.subtitle}</Subtitle>
//             <Date>{frontmatter.date}</Date>
//           </TitleText>
//           <TitleImage fluid={frontmatter.image.childImageSharp.fluid} alt="cool stuff." />
//         </TitleBlock>
//         <MainContentSection>
//           <div>
//             <MDXRenderer>{body}</MDXRenderer>
//           </div>
//         </MainContentSection>
//       </MDXProvider> 
//     </Content>
//   )
// }

// export const query = graphql`
//   query ArticleQuery($slug: String!) {
//     mdx(fields: { slug: { eq: $slug }}) {
//       timeToRead
//       frontmatter {
//         title
//         subtitle
//         # date(formatString: "MMMM Do, YYYY")
//         image {
//           childImageSharp {
//             fluid(maxWidth: 3840) {
//             ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//       tableOfContents
//       body
//     }
//   }
// `

// export default injectIntl(Article)