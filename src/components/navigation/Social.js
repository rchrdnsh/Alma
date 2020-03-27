import React from 'react'
import styled from 'styled-components'

import FacebookIcon from '../../images/social/facebook-button.svg'
import InstagramIcon from '../../images/social/instagram-button.svg'
import TwitterIcon from '../../images/social/twitter-button.svg'
import YouTubeIcon from '../../images/social/youtube-button.svg'

const SocialButtons = styled.div`
  /* margin: 0 0 -1rem -1rem; */
  margin: 0.5rem;
  padding: 0;
  grid-column: 1 / 4;
  /* grid-row: 2 / 3; */
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (orientation: landscape) {
    margin: 0;
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    align-self: center;
  }
`

const SocialButton = styled.a`
  margin: 0;
  padding: 0;
  height: 32px;
  width: 32px;

  > img {
    margin-bottom: 0;
    padding: 0;
    height: 32px;
    width: 32px;
  }
`

const Social = () => {
  return (
    <>
      <SocialButtons>
        <SocialButton href='https://www.facebook.com/almavacations' target="_blank">
          <img src={FacebookIcon} alt='The Alma Resort Facebook account.' />
        </SocialButton>
        <SocialButton href='https://www.instagram.com/almavacations' target="_blank">
          <img src={InstagramIcon} alt='The Alma Resort Instagram account.' />
        </SocialButton>
        <SocialButton href='https://www.twitter.com/almavacations' target="_blank">
          <img src={TwitterIcon} alt='The Alma Resort Twitter account.' />
        </SocialButton>
        <SocialButton href='https://www.youtube.com/channel/UCMzsbNMXxwVTLOUZr_3lZWw' target="_blank">
          <img src={YouTubeIcon} alt='The Alma Resort YouTube account.' />
        </SocialButton>
      </SocialButtons>
    </>
  )
}

export default Social
