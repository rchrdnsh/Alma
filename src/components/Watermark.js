import React from 'react'
import styled from 'styled-components'
import almaLogoWhite from '../images/alma/alma-logo-white.svg'

const WatermarkImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.75rem;
  padding: 0;
  z-index: 10;
  height: auto;
  opacity: 0.5;
  ${props => props.small && `width: 12%;`}
  ${props => props.medium && `width: 9%;`}
  ${props => props.large && `width: calc(48px + (80 - 48) * ((100vw - 300px) / (1600 - 300)));`}
`

const Watermark = (props) => {
  return(
    <WatermarkImage
      src={almaLogoWhite}
      small={props.small}
      medium={props.medium}
      large={props.large}
    />
  )
}

export default Watermark