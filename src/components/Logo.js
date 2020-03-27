import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link, injectIntl } from 'gatsby-plugin-intl'

import almaShell from '../images/alma/alma-shell.svg'
import almaLogoWithBG from '../images/alma/alma-logo-with-bg.svg'

const SmallAlmaLogo = styled(Link)`
  margin: 0;
  padding: 0;
  grid-column: 2 / 3;
  z-index: 1;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: auto;
    width: 100%;
    width: calc(80px + (160 - 80) * ((100vw - 300px) / (1600 - 300)));
    /* max-width: 5rem; */
    margin: 0;
    padding: 8px;
    margin-top: -16px;
    background: white;
    border-radius: 50% 50% 0 0;
  }

  @media (orientation: landscape) {
    display: none;
  }
`

const LargeAlmaLogo = styled(Link)`
  display: none;

  @media (orientation: landscape) {
    margin: 0;
    padding: 0;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    > img {
      max-width: 75%;
      width: calc(128px + (256 - 128) * ((100vw - 300px) / (1600 - 300)));
    }
  }
`

const Logo = () => {

  return(
    <Fragment>
      <SmallAlmaLogo to={`/`}>
        <img src={almaShell} alt="The Alma Resort Shell."  />
      </SmallAlmaLogo>
      <LargeAlmaLogo to={`/`}>
        <img src={almaLogoWithBG} alt="The Alma Resort Logo."  />
      </LargeAlmaLogo>
    </Fragment>
    
  )
}

export default injectIntl(Logo)