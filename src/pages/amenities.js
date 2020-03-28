import React from 'react'
import { graphql } from 'gatsby'
import { Link, useIntl } from 'gatsby-plugin-intl'

import SEO from '../components/SEO'

import Content from '../components/Content'
import { HeadingContainer } from '../components/layout/FullContentCard'
import Arrow from '../components/Arrow'
import { Image } from '../components/Image'
import AlmaHeader from '../components/Header'
import { Button } from '../components/Button'
import { P, UL, ListTitle, LI } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'

const Amenities = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: 'amenities-title' })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: 'amenities-title' })}/>
        </HeadingContainer>
        <Image grid fluid={data.waterpark4.childImageSharp.fluid}/>
        <Caption large>Artist Rendering</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>{t({ id: 'amenities-paragraph-1' })}</P>

      <Box full image>
        <Image rounded fluid={data.receptionLobby.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'amenities-paragraph-2' })}</P>

      <Box full image>
        <Image rounded fluid={data.lobbyLounge.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'amenities-paragraph-3' })}</P>

      <Box full image>
        <Image rounded fluid={data.conventionCenter.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'amenities-paragraph-4' })}</P>

      <Box full image>
        <Image rounded fluid={data.ballroom.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
        <Watermark medium/>
      </Box>

      <Box center>
        <ListTitle>{t({ id: 'activities-list' })}</ListTitle>
        <UL>
          <LI>{t({ id: 'activity-1' })}</LI>
          <LI>{t({ id: 'activity-2' })}</LI>
          <LI>{t({ id: 'activity-3' })}</LI>
          <LI>{t({ id: 'activity-4' })}</LI>
          <LI>{t({ id: 'activity-5' })}</LI>
          <LI>{t({ id: 'activity-6' })}</LI>
          <LI>{t({ id: 'activity-7' })}</LI>
          <LI>{t({ id: 'activity-8' })}</LI>
          <LI>{t({ id: 'activity-9' })}</LI>
          <LI>{t({ id: 'activity-10' })}</LI>
          <LI>{t({ id: 'activity-11' })}</LI>
          <LI>{t({ id: 'activity-12' })}</LI>
        </UL>
      </Box>

      <Box center>
        <ListTitle>{t({ id: 'amenities-list' })}</ListTitle>
        <UL>
          <LI>{t({ id: 'amenity-1' })}</LI>
          <LI>{t({ id: 'amenity-2' })}</LI>
          <LI>{t({ id: 'amenity-3' })}</LI>
          <LI>{t({ id: 'amenity-4' })}</LI>
          <LI>{t({ id: 'amenity-5' })}</LI>
          <LI>{t({ id: 'amenity-6' })}</LI>
          <LI>{t({ id: 'amenity-7' })}</LI>
        </UL>
      </Box>

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
    receptionLobby: file(relativePath: { eq: "amenities/reception-lobby-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lobbyLounge: file(relativePath: { eq: "amenities/lobby-lounge-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conventionCenter: file(relativePath: { eq: "amenities/convention-center-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ballroom: file(relativePath: { eq: "amenities/ballroom-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spaTreatment: file(relativePath: { eq: "amenities/spa-treatment-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waterpark4: file(relativePath: { eq: "amenities/waterpark-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Amenities