import React from 'react'
import styled from 'styled-components'
import { Link, useIntl } from 'gatsby-plugin-intl'

import almaShell from '../../images/alma/alma-shell.svg'

const AlmaLink = styled(Link)`
  grid-column: 2 / 4;
  white-space: nowrap;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: calc(14px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 300;
  margin: 0.4rem;
  padding: 0.25rem 0;
  line-height: 0.75;
  color: #2d658e;

  /* :focus {
    background: hsla(207, 55%, 69%, 0.2);
    border-radius: 32px;
    box-shadow: inset 0 0 8px hsla(0,0%,0%,0.25);
  } */

  @media (orientation: landscape) {
    font-size: calc(10px + (18 - 10) * ((100vw - 300px) / (1600 - 300)));
    grid-column: 2 / 4;
    line-height: 1.25;
    margin: 0.25rem;
    padding: 0.25rem 0;
  }
`

const AlmaLink2 = styled(Link)`
  grid-column: 2 / 4;
  margin: 0.4rem;
  padding: 0.25rem 0;
  text-decoration: none;
  white-space: nowrap;
  font-family: 'Open Sans', sans-serif;
  font-size: calc(14px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 300;
  line-height: 1;
  color: grey;

  @media (orientation: landscape) {
    grid-column: 2 / 4;
    font-size: calc(8px + (16 - 8) * ((100vw - 300px) / (1600 - 300)));
    line-height: 1.25;
    margin: 0.25rem;
    padding: 0.25rem 0;
  }
`

const AlmaBulletShell = styled.img`
  padding: 0;
  width: 0.9rem;
  height: auto;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;

  @media (orientation: landscape) {
    grid-column: 1 / 2;
    margin-bottom: 0px;
  }
`


const Links = ({toggle}) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <>
      <AlmaBulletShell src={almaShell}/>
      <AlmaLink to={`/resort`} onClick={toggle}>{t({ id: "nav-resort" })}</AlmaLink>
        <AlmaLink2 to={`/villas`} onClick={toggle}>{t({ id: "nav-villas" })}</AlmaLink2>
        <AlmaLink2 to={`/condos`} onClick={toggle}>{t({ id: "nav-apartments" })}</AlmaLink2>
        <AlmaLink2 to={`/restaurants`} onClick={toggle}>{t({ id: "nav-restaurants" })}</AlmaLink2>
        <AlmaLink2 to={`/amenities`} onClick={toggle}>{t({ id: "nav-amenities" })}</AlmaLink2>
        <AlmaLink2 to={`/news`} onClick={toggle}>{t({ id: "nav-news" })}</AlmaLink2>
      <AlmaBulletShell src={almaShell}/>
      <AlmaLink to={`/vacations`} onClick={toggle}>{t({ id: "nav-vacations" })}</AlmaLink>
      <AlmaBulletShell src={almaShell}/>
      <AlmaLink to={`/alma`} onClick={toggle}>{t({ id: "nav-about-alma" })}</AlmaLink>
      <AlmaBulletShell src={almaShell}/>
      <AlmaLink to={`/showroom`} onClick={toggle}>{t({ id: "nav-showroom" })}</AlmaLink>
      {/* <AlmaBulletShell src={almaShell}/>
      <AlmaLink to={`/careers`} onClick={toggle}>Careers</AlmaLink> */}
    </>
  )
}

export default Links

