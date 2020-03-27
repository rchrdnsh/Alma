import styled from 'styled-components'

import almaPattern1 from '../images/alma/alma-bg-pattern-1.svg'
import almaPattern2 from '../images/alma/alma-bg-pattern-2.svg'

const Box = styled.div`
  margin: 0;
  padding: 0; 
  position: relative;

  ${props => props.center && `grid-column: 2 / 3;`}

  ${props => props.full && `grid-column: 1 / 4;`}

  ${props => props.flex && `
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (orientation: landscape) {
      padding: 4rem;
      flex-direction: row;
    }
  `}

  ${props => props.featured && `
    grid-column: 1 / 4;
    position: relative;
    margin: 0;
    padding: 0;
    height: calc(var(--vh, 1vh) * 90);
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(8, 1fr);

    @media (orientation: landscape) {
      height: 100vh;
    }
  `}

  ${props => props.scroll && `
    margin: 0;
    padding: 0;
    min-width: 0;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    background-repeat: repeat;
    background-size: 96px;
    box-shadow: inset 0px 0px 32px rgba(0, 0, 0, 0.25);

    ::-webkit-scrollbar {
      display: none;
    }

    ::after {
      content:'';
      flex: 0 0 2rem;
    }

  `}
  ${props =>
    props.blue && `
      background-color: hsla(188, 70%, 43%, 1);
      background-image: url(${almaPattern1});
  `}
  
  ${props =>
    props.orange && `
      background-color: hsla(30, 46%, 59%, 1); 
      background-image: url(${almaPattern2});
  `}

  ${props =>
    props.button && `
    margin: 0;
    display: flex;
    justify-content: center;
  `}

  ${props =>
    props.image && `
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
  `}

  ${props => 
    props.grid && `
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    ;
  `}
  grid-row-gap: ${props =>
    props.space === '1' ? `1rem` :
    props.space === '2' ? `2rem` :
    props.space === '3' ? `3rem` :
    props.space === '4' ? `4rem` :
    props.space === '5' ? `5rem` :
    `0`
  };
`

export default Box