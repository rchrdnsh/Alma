import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'
import almaLogoWithBG from '../images/alma-logo-with-bg.svg'

// export default styled(Link)`
//   grid-column: 2 / 3;
//   grid-row: 3 / 4;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 2;
//   background: white;
//   border: 1px solid black;

//   > img {
//     max-width: 96px;
//     margin: -64;
//     padding: 1rem;
//     background: white;
//     border-radius: 50% 50% 0 0;
//     filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25) );
//     z-index: 20;
//   }

//   @media (min-width: 50rem) {
//     display: none;
//   }
// `

export default styled(Link)`
  grid-column: 2 / 3;
  /* grid-row: 1 / 2; */
  /* align-self: center;
  justify-self: center; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  z-index: 2;
  /* background: white; */
  border: 1px solid red;

  > img {
    /* max-width: 96px; */
    /* margin: -64; */
    /* padding: 1rem; */
    /* background: white; */
    /* border-radius: 50% 50% 0 0; */
    /* filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25) ); */
    z-index: 20;
  }

  @media (orientation: landscape) {
    display: none;
  }
`

// export default styled(AniLink)`
//   grid-column: 1 / 4;
//   grid-row: 1 / 2;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 2;
//   /* border: 1px solid black; */

//   > img {
//     max-width: 200px;
//     margin: 0;
//     padding: 0;
//     filter: drop-shadow( 0px 0px 16px rgba(0, 0, 0, 0.25) );
//   }

//   @media (min-width: 50rem) {
//     grid-column: 1 / 2;

//     > img {
//       max-width: 75%;
//       filter: none;
//     }
//   }
// `