import styled from 'styled-components'
import Img from 'gatsby-image'

const Image = styled(Img)`
  position: relative;
  margin: 0;
  /* ${props => props.margin && `margin: 1rem`} */
  padding: 0 1rem;
  width: 100%;
  height: auto;
  /* ${props => props.rounded && `border-radius: 16px`} */
  border-radius: ${props => props.rounded ? "16px" : "0"};

  ${props => props.grid && `
    grid-row: 1 / 9;
    grid-column: 1 / 9;
    object-fit: cover;
    z-index: 0;
    `
  }

  ${props =>
    props.card && `
      margin: 0;
      padding: 0;
      width: 100%;
      height: auto;
      border-radius: 6px;
      z-index: 1;
  `}
  /* box-shadow: 0px 0px 16px hsla(0, 0%, 0%, 0.1); */

  @media (orientation: landscape) {
    /* ${props => props.margin && `margin: 0 2rem`} */
    /* ${props => props.rounded && `border-radius: 24px`} */
    /* border-radius: ${props => props.rounded ? "24px" : "0"}; */
  }

  @media (min-width: 75rem ) {
    /* ${props => props.margin && `margin: 0 8rem`} */
  }

  @media (min-width: 100rem ) {
    /* ${props => props.margin && `margin: 0 12rem`} */
  }
`

const BangImage = styled(Img)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  border-radius: 16px;
  z-index: 1;
`

const FullImage = styled.div`
  position: relative;
  margin: 0 1rem;
  padding: 0;
  border-radius: 16px;
  box-shadow: 0px 0px 16px hsla(0, 0%, 0%, 0.1);

  @media (min-width: 50rem) {
    margin: 0 2rem;
    border-radius: 24px;
  }

  @media (min-width: 75rem ) {
    margin: 0 8rem;
  }

  @media (min-width: 100rem ) {
    margin: 0 12rem;
  }
`

export { Image, BangImage, FullImage }