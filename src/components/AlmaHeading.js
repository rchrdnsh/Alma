import styled from 'styled-components'
import almaBorder from '../../images/alma/alma-border.svg'
import almaHeader from '../../images/alma/alma-header.svg'

export default styled.h1`
  margin: 1rem 1rem;
  padding: 0.5rem 0;
  font-family: 'Quicksand', sans-serif;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  color: #007eb5;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 8px;
  border-width: 24px;
  border: 24px solid;
  border-image: url(${almaBorder}) 42 stretch;
  /* font-family: 'Gothic A1', sans-serif; */

  @media (orientation: landscape) {
    font-size: calc(28px + (40 - 28) * ((100vw - 300px) / (1600 - 300)));
  }

  > span {
    letter-spacing: 0;
  }
`

// export default styled.h1`
//   margin: 1rem 1rem;
//   padding: 2rem 0;
//   font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
//   color: #AF875D;
//   text-align: center;
//   text-transform: uppercase;
//   letter-spacing: 16px;
//   text-shadow: 0px 0px 8px hsla(0, 0%, 0%, 0.5);
//   line-height: 1;
//   border-width: 32px;
//   border: 32px solid;
//   border-image: url(${almaBorder}) 32 stretch;
//   font-family: 'Gothic A1', sans-serif;
//   background-image: url(${almaHeader});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-size: 80vh;

//   @media (min-width: 50rem) {
//     font-size: calc(28px + (40 - 28) * ((100vw - 300px) / (1600 - 300)));
//   }

//   > span {
//     letter-spacing: 0;
//    }
// `