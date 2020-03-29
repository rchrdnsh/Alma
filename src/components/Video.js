import React from 'react'
import styled from 'styled-components'

import resortVideo from '../videos/alma-resort-1-min-1k.mp4'

const BGVideo = styled.video`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  width: 100%;
  height: 100%;
  z-index: 2;
  align-self: stretch;
  justify-self: stretch;
  object-fit: cover;
`

const Video = () => {
  return (
    <BGVideo playsInline autoPlay muted loop preload="none">
      <source src={resortVideo} type="video/mp4"/>
    </BGVideo>
  )
}

export default Video
