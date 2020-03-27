import React from 'react'
import styled from 'styled-components'

const CaptionText = styled.figcaption`
  position: absolute;
  color: white;
  text-shadow: 1px 1px 3px hsla(0,0%,0%,0.75);
  bottom: 0;
  left: 0;
  font-family: 'Work Sans', sans-serif;
  margin: 0.75rem;
  padding: 0;
  z-index: 10;
  opacity: 0.5;
  ${props => props.small && `font-size: calc(6px + (10 - 6) * ((100vw - 300px) / (1600 - 300)));`}
  ${props => props.medium && `font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));`}
  ${props => props.large && `font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));`}
`

const Caption = (props) => {
  return(
    <CaptionText
      small={props.small}
      medium={props.medium}
      large={props.large}
    >
      {props.children}
    </CaptionText>
  )
}

export default Caption