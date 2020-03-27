import React from 'react'
import { graphql } from 'gatsby'
import { Link, useIntl } from 'gatsby-plugin-intl'
// import styled from 'styled-components'
// import Img from 'gatsby-image'

import SEO from '../components/seo'

import Content from '../components/Content'
import { HeadingContainer } from '../components/layout/FullContentCard'
import Arrow from '../components/Arrow'
import { Image } from '../components/Image'
import AlmaHeader from '../components/Header'
import { Button, } from '../components/Button'
import { P, UL, ListTitle, LI } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'

const Restaurants = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: 'restaurants-title' })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: 'restaurants-title' })}/>
        </HeadingContainer>
        <Image grid fluid={data.asiana1desktop.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>{t({ id: 'restaurants-paragraph-1' })}</P>

      <Box full image>
        <Image rounded fluid={data.almagarden1desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'restaurants-paragraph-2' })}</P>

      <Box full image>
        <Image rounded fluid={data.atlantis1desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'restaurants-paragraph-3' })}</P>

      <Box full image>
        <Image rounded fluid={data.asiana2desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'restaurants-paragraph-4' })}</P>

      <Box full image>
        <Image rounded fluid={data.lacasarender.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'restaurants-paragraph-5' })}</P>

      <Box full image>
        <Image rounded fluid={data.foodcourt1desktop.childImageSharp.fluid}/>
        <Caption small>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'restaurants-paragraph-6' })}</P>

      <Box full image>
        <Image rounded fluid={data.americanbar1desktop.childImageSharp.fluid}/>
        <Caption small>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <Box center>
        <ListTitle>{t({ id: 'restaurants-list' })}</ListTitle>
        <UL> 
          <LI>{t({ id: 'restaurant-1' })}</LI>
          <LI>{t({ id: 'restaurant-2' })}</LI>
          <LI>{t({ id: 'restaurant-3' })}</LI>
          <LI>{t({ id: 'restaurant-4' })}</LI>
          <LI>{t({ id: 'restaurant-5' })}</LI>
          <LI>{t({ id: 'restaurant-6' })}</LI>
          <LI>{t({ id: 'restaurant-7' })}</LI>
          <LI>{t({ id: 'restaurant-8' })}</LI>
        </UL>
      </Box>

      <P center>{t({ id: 'restaurants-to-amenities' })}</P>

      <Box center button>
        <Link to='/amenities'>
          <Button>{t({ id: 'amenities-title' })}</Button>
        </Link> 
      </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    almagarden1mobile: file(relativePath: { eq: "restaurants/alma-garden-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almagarden1desktop: file(relativePath: { eq: "restaurants/alma-garden-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almagarden2mobile: file(relativePath: { eq: "restaurants/alma-garden-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almagarden2desktop: file(relativePath: { eq: "restaurants/alma-garden-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    americanbar1mobile: file(relativePath: { eq: "restaurants/american-bar-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    americanbar1desktop: file(relativePath: { eq: "restaurants/american-bar-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    americanbar2mobile: file(relativePath: { eq: "restaurants/american-bar-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    americanbar2desktop: file(relativePath: { eq: "restaurants/american-bar-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    americanbar3mobile: file(relativePath: { eq: "restaurants/american-bar-3-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    americanbar3desktop: file(relativePath: { eq: "restaurants/american-bar-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    asiana1mobile: file(relativePath: { eq: "restaurants/asiana-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    asiana1desktop: file(relativePath: { eq: "restaurants/asiana-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    asiana2mobile: file(relativePath: { eq: "restaurants/asiana-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    asiana2desktop: file(relativePath: { eq: "restaurants/asiana-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    atlantis1mobile: file(relativePath: { eq: "restaurants/atlantis-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    atlantis1desktop: file(relativePath: { eq: "restaurants/atlantis-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    atlantis2mobile: file(relativePath: { eq: "restaurants/atlantis-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    atlantis2desktop: file(relativePath: { eq: "restaurants/atlantis-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar1mobile: file(relativePath: { eq: "restaurants/beach-bar-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar1desktop: file(relativePath: { eq: "restaurants/beach-bar-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar2mobile: file(relativePath: { eq: "restaurants/beach-bar-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar2desktop: file(relativePath: { eq: "restaurants/beach-bar-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar3mobile: file(relativePath: { eq: "restaurants/beach-bar-3-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar3desktop: file(relativePath: { eq: "restaurants/beach-bar-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar4mobile: file(relativePath: { eq: "restaurants/beach-bar-4-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar4desktop: file(relativePath: { eq: "restaurants/beach-bar-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar5mobile: file(relativePath: { eq: "restaurants/beach-bar-5-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar5desktop: file(relativePath: { eq: "restaurants/beach-bar-5-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar6mobile: file(relativePath: { eq: "restaurants/beach-bar-6-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar6desktop: file(relativePath: { eq: "restaurants/beach-bar-6-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar7mobile: file(relativePath: { eq: "restaurants/beach-bar-7-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachbar7desktop: file(relativePath: { eq: "restaurants/beach-bar-7-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almalounge1mobile: file(relativePath: { eq: "restaurants/alma-lounge-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almalounge1desktop: file(relativePath: { eq: "restaurants/alma-lounge-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almalounge2mobile: file(relativePath: { eq: "restaurants/alma-lounge-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almalounge2desktop: file(relativePath: { eq: "restaurants/alma-lounge-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodcourt1mobile: file(relativePath: { eq: "restaurants/food-court-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodcourt1desktop: file(relativePath: { eq: "restaurants/food-court-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodcourt2mobile: file(relativePath: { eq: "restaurants/food-court-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodcourt2desktop: file(relativePath: { eq: "restaurants/food-court-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodcourt2mobile: file(relativePath: { eq: "restaurants/food-court-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    foodcourt2desktop: file(relativePath: { eq: "restaurants/food-court-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lacasarender: file(relativePath: { eq: "restaurants/la-casa-4x3-render.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Restaurants