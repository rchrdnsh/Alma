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

const Alma = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: 'alma-title' })}/>

      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: 'alma-title' })}/>
        </HeadingContainer>
        <Image grid fluid={data.resort5.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>{t({ id: 'alma-intro-paragraph-2' })}</P>

      <H1 center>{t({ id: 'alma-heading-1' })}</H1>
      
      <H2 center>{t({ id: 'alma-heading-1-1' })}</H2>
      <P center>{t({ id: 'alma-paragraph-1-1' })}</P>
      
      <H2 center>{t({ id: 'alma-heading-1-2' })}</H2>
      <P center>{t({ id: 'alma-paragraph-1-2' })}</P>
      
      <H2 center>{t({ id: 'alma-heading-1-3' })}</H2>
      <P center>{t({ id: 'alma-paragraph-1-3' })}</P>
      
      <UL center>
        <LI>{t({ id: 'alma-1-3-point-1' })}</LI>
        <LI>{t({ id: 'alma-1-3-point-2' })}</LI>
        <LI>{t({ id: 'alma-1-3-point-3' })}</LI>
        <LI>{t({ id: 'alma-1-3-point-4' })}</LI>
        <LI>{t({ id: 'alma-1-3-point-5' })}</LI>
      </UL>

      <H2 center>{t({ id: 'alma-heading-1-4' })}</H2>
      <P center>{t({ id: 'alma-paragraph-1-4' })}</P>

      <AlmaHeader center blue title={t({ id: 'founder-name' })}/>
      
      <P center>{t({ id: 'founder-paragraph-1' })}</P>
      <P center>{t({ id: 'founder-paragraph-2' })}</P>
      
      <P center>{t({ id: 'alma-to-home' })}</P>
      
      <Box center button>
        <Link to='/'>
          <Button>Home</Button>
        </Link> 
      </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    resort5: file(relativePath: { eq: "resort/resort-5-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Alma