import React from 'react'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'

import almaPattern3 from '../images/alma/alma-bg-pattern-3.svg'

const Container = styled.div`
  grid-column: 1 / 4;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #888;
  background-image: url(${almaPattern3});
  background-repeat: repeat;
  background-size: 96px;
  box-shadow: inset 0px 0px 32px rgba(0, 0, 0, 0.1);

  > p {
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    -webkit-text-fill-color: #ffffff;
    text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.25);
    text-align: center;
  }
`

const P = styled.p`
  line-height: 2;
  margin: 0;
  padding: 0;
`

const Spacer = styled.div`
  height: 2rem;
`

const BannerSpacer = styled.div`
  height: 12vh;
`

const Footer = () => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Container>
      <Spacer/>
      <P>{t({ id: "copyright-notice" })}</P>
      <Spacer/>
      <P>{t({ id: "solicitation-notice" })}</P>
      <Spacer/>
      <P>Contact Us:</P>
      <P>1.714.689.8554</P>
      <P>575 Anton Blvd Suite 650 Costa Mesa, CA 92626</P>
      <BannerSpacer/>
    </Container>
  )
}

export default Footer