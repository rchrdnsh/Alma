import React from 'react'
import styled from 'styled-components'
import almaHeaderBlueSmall from '../images/alma/alma-header-blue-small.svg'
import almaHeaderBlueLarge from '../images/alma/alma-header-blue-large.svg'
import almaHeaderWhiteSmall from '../images/alma/alma-header-white-small.svg'
import almaHeaderWhiteLarge from '../images/alma/alma-header-white-large.svg'

const HeaderContainer = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  /* border: 1px solid red; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  ${props => props.center && `grid-column: 2 / 3;`}
  ${props => props.full && `grid-column: 1 / 4;`}
  /* filter: drop-shadow( 0px 0px 16px hsla(0, 0%, 0%, 0.5)); */
  /* filter:
    ${props => props.white ?
      "drop-shadow( 0px 0px 16px hsla(0, 0%, 0%, 0.25))"
      :
      "none"
    }
  ; */
`

const HeaderTitle = styled.h1`
  margin: 0;
  padding: calc(20px + (170 - 20) * ((100vw - 300px) / (1600 - 300))) 0;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 2;
  align-self: center;
  justify-self: center;
  line-height: 1;
  color: ${props => props.white ? "#007eb5" : "white"};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: calc(4px + (8 - 4) * ((100vw - 300px) / (1600 - 300)));
  font-size: calc(24px + (40 - 24) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Quicksand';
  font-weight: 700;
  text-shadow: ${props => props.white ? "none" : "0px 0px 8px hsla(0, 0%, 0%, 0.25)"};
  margin-right: -8px;

  @media (orientation: landscape) {
    padding: calc(68px + (68 - 68) * ((100vw - 300px) / (1600 - 300))) 0;
    font-size: calc(18px + (40 - 18) * ((100vw - 300px) / (1600 - 300)));
    margin-right: -24px;
  }
`

// const LargeHeaderTitle = styled(HeaderTitle)`
//   @media (min-width: 50rem) {
//     padding: calc(60px + (70 - 60) * ((100vw - 300px) / (1600 - 300))) 0;
//   }
// `

const HeaderBackground = styled.div`
  margin: 0;
  padding: 0;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 1;
  align-self: stretch;
  justify-self: stretch;
  width: 100%;
  height: auto;
  /* min-height: 6rem;
  max-height: 8rem; */
  /* object-fit: fill; */
  /* opacity: 0.9; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  ${props =>
    props.blue && `
      background-image: url(${almaHeaderBlueSmall});
  `}
  ${props =>
    props.white && `
      background-image: url(${almaHeaderWhiteSmall});
  `}

  @media (orientation: landscape) {
    ${props =>
      props.blue && `
      background-image: url(${almaHeaderBlueLarge});
    `}
    ${props =>
      props.white && `
      background-image: url(${almaHeaderWhiteLarge});
    `}
  }
`

// const HeaderBackgroundLarge = styled.img`

//   display: none;

//   @media (min-width: 50rem) {
//     margin: 0;
//     padding: 0;
//     grid-column: 1 / 2;
//     grid-row: 1 / 2;
//     z-index: 1;
//     align-self: stretch;
//     justify-self: stretch;
//     width: 100%;
//     height: auto;
//     min-height: 6rem;
//     max-height: 8rem;
//     object-fit: fill;
//     opacity: 0.9;
    
//   }
  
// `

const Header = (props) => {

  return (
    <HeaderContainer
      center={props.center}
      full={props.full}
      white={props.white}>
      <HeaderTitle
        white={props.white}
      >
        {props.title}
      </HeaderTitle>
      {/* <HeaderBackground src={props.white ? almaHeaderWhiteSmall : almaHeaderBlueSmall} alt='Decorative Alma Heading Background Image.'/> */}
      <HeaderBackground
        white={props.white}
        blue={props.blue}
      />
    </HeaderContainer>
  )
}

export default Header