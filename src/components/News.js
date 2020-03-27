import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, injectIntl } from 'gatsby-plugin-intl'

const NewsContainer = styled.div`
grid-column: 1 / 8;
margin: 0;
padding: 2rem;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto;
grid-gap: 2rem;

@media (min-width: 800px) {
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

@media (min-width: 1600px) {
  grid-template-columns: 1fr 1fr;
}

@media (orientation: landscape) {
  .content-grid {
    margin: 2rem;
  }
}
`

const NewsCard = styled(Link)`
box-sizing: border-box;
/* top: 0px; */
margin: 0;
padding: 0;
/* align-self: stretch;
justify-self: stretch; */
/* padding-top: calc(1 / (16/9) * 100%); */
position: relative;
text-decoration: none;
/* padding: 1rem; */
line-height: 1;
background: white;
cursor: pointer;
border-radius: 16px;
transition: All 250ms ease;
box-shadow: 
  0 13px 27px -5px rgba(50,50,93,.25),
  0 8px 16px -8px rgba(0,0,0,.3),
  0 -6px 16px -6px rgba(0,0,0,.025)
;
/* padding-top: calc(1 / (16/12) * 100%); */
/* padding-bottom: 100%; */
padding-top: 55%;

:hover {

  box-shadow:
    0 30px 60px -12px rgba(50,50,93,.25),
    0 18px 36px -18px rgba(0,0,0,.3),
    0 -12px 36px -8px rgba(0,0,0,.025)
  ;
  transform: translateY(-2px);
}

:active {
  transition: All 100ms ease;
  transform: translateY(2px);
}

@media (min-width: 50rem) {
  /* padding-top: calc(1 / (16/8) * 100%); */
  padding-top: 55%;
}
`

const NewsContentWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(8, 1fr);
/* margin: 0;
padding: 0; */
`

const NewsTitle = styled.h1`
text-shadow: 0px 0px 8px hsla(360, 100%, 100%, 1);
font-size: calc(32px + (64 - 32) * ((100vw - 300px) / (1600 - 300)));
font-family: 'Caveat', 'Knewave', 'Oswald', 'Condiment', 'Over the Rainbow',  sans-serif;
font-weight: normal;
color: #fff;
margin: 0;
padding: 0 0 0 1rem;
font-weight: normal;
color: #fff;
line-height: 1;
font-style: bold;
grid-column: 1 / 13;
grid-row: 5 / 7;
align-self: end;
z-index: 5;

@media (min-width: 800px) {
  font-size: calc(16px + (64 - 16) * ((100vw - 300px) / (1600 - 300)));
}
`

const NewsSubtitle = styled.h2`
text-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
font-family: 'Open Sans', sans-serif;
color: #fff;
margin: 0;
padding: 0 0 0 1rem;
font-size: 12px;
color: #fff;
line-height: 1;
align-self: center;
font-style: normal;
grid-column: 1 / 13;
grid-row: 7 / 8;
z-index: 4;

@media (min-width: 800px) {
  font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
}
`

const NewsDate = styled.h3`
text-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
font-family: 'Open Sans', sans-serif;
color: #fff;
grid-column: 1 / 13;
grid-row: 8 / 9;
z-index: 5;
padding: 0 0 0 1rem;
margin: 0;
`

const NewsImage = styled(Img)`
grid-column: 1 / 13;
grid-row: 1 / 9;
width: 100%;
height: 100%;
min-height: 100%;
object-fit: cover;
border-radius: 16px;
z-index: 0;
/* margin: 0;
padding: 0; */
`

const NewsScrim = styled.div`
grid-column: 1 / 13;
grid-row: 1 / 9;
background: linear-gradient(
  to bottom,
  hsla(0, 0%, 0%, 0) 0%,
  hsla(0, 0%, 0%, 0.006) 8.1%,
  hsla(0, 0%, 0%, 0.024) 15.5%,
  hsla(0, 0%, 0%, 0.052) 22.5%,
  hsla(0, 0%, 0%, 0.088) 29%,
  hsla(0, 0%, 0%, 0.13) 35.3%,
  hsla(0, 0%, 0%, 0.176) 41.2%,
  hsla(0, 0%, 0%, 0.225) 47.1%,
  hsla(0, 0%, 0%, 0.275) 52.9%,
  hsla(0, 0%, 0%, 0.324) 58.8%,
  hsla(0, 0%, 0%, 0.37) 64.7%,
  hsla(0, 0%, 0%, 0.412) 71%,
  hsla(0, 0%, 0%, 0.448) 77.5%,
  hsla(0, 0%, 0%, 0.476) 84.5%,
  hsla(0, 0%, 0%, 0.494) 91.9%,
  hsla(0, 0%, 0%, 0.5) 100%
);
border-radius: 16px;
z-index: 1;
/* margin: 0;
padding: 0; */
`

const News = ({ data }) => {
  return (
    <NewsContainer>
      {data.allMdx.edges.map(({ node }) => (
        <NewsCard key={node.id} to={node.fields.slug}>
          <NewsContentWrapper>
            <NewsTitle>{node.frontmatter.title}</NewsTitle>
            <NewsSubtitle>{node.frontmatter.subtitle}</NewsSubtitle>
            <NewsDate>{node.frontmatter.date}</NewsDate>
            <NewsImage fluid={node.frontmatter.image.childImageSharp.fluid} alt="cool stuff." />
            <NewsScrim />
          </NewsContentWrapper>
        </NewsCard>
      ))}
    </NewsContainer>
  )
}

// export const query = graphql`
//   query {
//     allMdx {
//       totalCount
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             subtitle
//             description
//             date(formatString: "MMMM Do, YYYY")
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 3840) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default injectIntl(News)

// export default News