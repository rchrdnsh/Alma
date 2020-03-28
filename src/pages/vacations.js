import React from 'react'
import { graphql } from 'gatsby'
import { Link, useIntl } from 'gatsby-plugin-intl'

import SEO from '../components/SEO'

import Content from '../components/Content'
import Box from '../components/Box'
import { HeadingContainer } from '../components/layout/FullContentCard'
import Arrow from '../components/Arrow'
import { Image } from '../components/Image'
import AlmaHeader from '../components/Header'
import { Button } from '../components/Button'
import { H1, H2, P, UL, LI } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'

const Vacations = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: 'vacations-title' })}/>

      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: 'vacations-title' })}/>
        </HeadingContainer>
        <Image grid fluid={data.secretsConcunPool.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>{t({ id: 'vacations-intro-paragraph' })}</P>

      <H1 center>{t({ id: 'rci-heading-1' })}</H1>
      <P center>{t({ id: 'rci-paragraph-1' })}</P>

      <H1 center>{t({ id: 'rci-heading-3' })}</H1>
      <P center>{t({ id: 'rci-paragraph-3' })}</P>

      <UL center>
        <LI>{t({ id: 'rci-point-1' })}</LI>
        <LI>{t({ id: 'rci-point-2' })}</LI>
        <LI>{t({ id: 'rci-point-3' })}</LI>
        <LI>{t({ id: 'rci-point-4' })}</LI>
        <LI>{t({ id: 'rci-point-5' })}</LI>
      </UL>

      <H1 center>{t({ id: 'rci-heading-5' })}</H1>
      <H2 center>{t({ id: 'rci-heading-5-1' })}</H2>
      <P center>{t({ id: 'rci-paragraph-5-1' })}</P>
      <H2 center>{t({ id: 'rci-heading-5-2' })}</H2>
      <P center>{t({ id: 'rci-paragraph-5-2' })}</P>
      <H2 center>{t({ id: 'rci-heading-5-3' })}</H2>
      <P center>{t({ id: 'rci-paragraph-5-3' })}</P>

      <AlmaHeader center blue title={t({ id: 'rci-destinations-title' })}/>

      <H1 center>{t({ id: 'rci-destination-1' })}</H1>
      <P center>{t({ id: 'rci-destination-1-paragraph' })}</P>

      <H1 center>{t({ id: 'rci-destination-2' })}</H1>
      <P center>{t({ id: 'rci-destination-2-paragraph' })}</P>

      <H1 center>{t({ id: 'rci-destination-3' })}</H1>
      <P center>{t({ id: 'rci-destination-3-paragraph' })}</P>

      <H1 center>{t({ id: 'rci-destination-4' })}</H1>
      <P center>{t({ id: 'rci-destination-4-paragraph' })}</P>

      <H1 center>{t({ id: 'rci-destination-5' })}</H1>
      <P center>{t({ id: 'rci-destination-5-paragraph' })}</P>

      <H1 center>{t({ id: 'rci-destination-6' })}</H1>
      <P center>{t({ id: 'rci-destination-6-paragraph' })}</P>

      <P center>{t({ id: 'vacations-to-alma' })}</P>

      <Box center button>
        <Link to='/alma'>
          <Button>{t({ id: 'alma-title' })}</Button>
        </Link> 
      </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    secretsConcunPool: file(relativePath: { eq: "rci/secrets-cancun-pool.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Vacations