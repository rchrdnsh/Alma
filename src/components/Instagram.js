import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
// import Img from 'gatsby-image'
// import { Link, injectIntl } from "gatsby-plugin-intl"

const InstaGrid = styled.div`
  margin: 0;
  padding: 2rem;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr); */
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 1fr; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;
`

const InstaPost = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 16px;
  box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.15);
  position: relative;
  transition: All 250ms ease;
  box-shadow: 
    0 13px 27px -5px rgba(50,50,93,.25),
    0 8px 16px -8px rgba(0,0,0,.3),
    0 -6px 16px -6px rgba(0,0,0,.025)
  ;

  :hover {
    box-shadow:
      0 30px 60px -12px rgba(50,50,93,.25),
      0 18px 36px -18px rgba(0,0,0,.3),
      0 -12px 36px -8px rgba(0,0,0,.025)
    ;
    transform: translateY(-2px);
  }
`

const InstaSpacer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
`

const InstaLikes = styled.p`
  grid-row: 8 / 9;
  grid-column: 1 / 4;
  z-index: 5;
  color: white;
  justify-self: center;
`

const InstaComments = styled.p`
  grid-row: 8 / 9;
  grid-column: 5 / 9;
  z-index: 5;
  color: white;
  justify-self: center;
`

const InstaImage = styled.img`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  margin: 0;
  padding: 0;
  /* border: 1px solid #ccc; */
  border-radius: 16px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const InstaScrim = styled.div`
  grid-column: 1 / 9;
  grid-row: 1 / 9;
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.003) 8.1%,
    hsla(0, 0%, 0%, 0.012) 15.5%,
    hsla(0, 0%, 0%, 0.026) 22.5%,
    hsla(0, 0%, 0%, 0.044) 29%,
    hsla(0, 0%, 0%, 0.065) 35.3%,
    hsla(0, 0%, 0%, 0.088) 41.2%,
    hsla(0, 0%, 0%, 0.113) 47.1%,
    hsla(0, 0%, 0%, 0.137) 52.9%,
    hsla(0, 0%, 0%, 0.162) 58.8%,
    hsla(0, 0%, 0%, 0.185) 64.7%,
    hsla(0, 0%, 0%, 0.206) 71%,
    hsla(0, 0%, 0%, 0.224) 77.5%,
    hsla(0, 0%, 0%, 0.238) 84.5%,
    hsla(0, 0%, 0%, 0.247) 91.9%,
    hsla(0, 0%, 0%, 0.25) 100%
  );
  z-index: 1;
  border-radius: 16px;
`

const Instagram = ({ data }) => {
  return (
    <InstaGrid>
      {data.allInstaNode.edges.map(({ node }) => (
        <InstaPost key={node.id}>
          <InstaSpacer>
            <InstaLikes>❤️ {node.likes}</InstaLikes>
            <InstaComments>💬 {node.comments}</InstaComments>
            <InstaScrim />
            <InstaImage src={node.original} />
          </InstaSpacer>
        </InstaPost>
      ))}
    </InstaGrid>
  )
}

// export const query = graphql`
//   query {
//     allInstaNode(sort: { fields: [timestamp], order: DESC }) {
//       edges {
//         node {
//           id
//           likes
//           comments
//           mediaType
//           preview
//           original
//           timestamp
//           caption
//           thumbnails {
//             src
//             config_width
//             config_height
//           }
//           dimensions {
//             height
//             width
//           }
//         }
//       }
//     }
//   }
// `

export default Instagram