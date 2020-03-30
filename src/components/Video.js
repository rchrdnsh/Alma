import React from 'react'
import styled from 'styled-components'

import resortVideo from '../videos/alma-resort-1-min-3k.mp4'

const BGVideo = styled.video`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  width: 100%;
  height: 100%;
  z-index: 10;
  align-self: stretch;
  justify-self: stretch;
  object-fit: cover;
`

const Scrimm = styled.div`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  width: 100%;
  height: 100%;
  z-index: 11;
  align-self: stretch;
  justify-self: stretch;
  object-fit: cover;
  /* background: hsla(0,0%,0%,0.25); */
  background-image: linear-gradient(to bottom, hsla(30, 73%, 60%, 0.25) 0%, hsla(199, 45%, 44%, 0.5) 100%);
`

const Video = () => {
  return (
    <>
      {/* <Scrimm/> */}
      <BGVideo playsInline autoPlay muted loop>
        <source src={resortVideo} type="video/mp4"/>
      </BGVideo>
    </>
  )
}

export default Video
