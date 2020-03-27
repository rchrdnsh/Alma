import styled from 'styled-components'
import Img from 'gatsby-image'

const FullContentCard = styled.div`
  grid-column: 1 / 4;
  position: relative;
  margin: 0;
  padding: 0;
  /* height: 90vh; */
  height: calc(var(--vh, 1vh) * 90);
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);

  @media (orientation: landscape) {
    height: 100vh;
  }
`

const FullContentImage = styled(Img)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  object-fit: cover;
  z-index: 0;
`

const HeadingContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 9;
  margin: 0 2rem;
  align-self: center;
  /* justify-self: center; */
  z-index: 5;

  @media (orientation: landscape) {
    grid-column: 2 / 8;
    margin: 0 4rem;
    /* max-width: 45rem; */
  }
`

export { FullContentCard, FullContentImage, HeadingContainer }