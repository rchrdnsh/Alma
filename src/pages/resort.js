import React from 'react'
import { graphql } from 'gatsby'
import { Link, useIntl } from 'gatsby-plugin-intl'
import SEO from "../components/seo"

import Content from '../components/Content'
import Box from '../components/Box'
import { HeadingContainer } from '../components/layout/FullContentCard'
import Arrow from '../components/Arrow'
import { Image } from '../components/Image'
import AlmaHeader from '../components/Header'
import { Button } from '../components/Button'
import { P } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'

const Resort = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: 'resort-title' })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: 'resort-title' })}/>
        </HeadingContainer>
        <Image grid fluid={data.resort1.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>{t({ id: 'resort-paragraph-1' })}</P>

      <Box full image>
        <Image rounded fluid={data.resort2desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'resort-paragraph-2' })}</P>

      <Box full image>
        <Image rounded fluid={data.resort3desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'resort-paragraph-3' })}</P>

      <Box full image>
        <Image rounded fluid={data.resort4desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: 'resort-paragraph-4' })}</P>

      <Box full image>
        <Image rounded fluid={data.resortNight1desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

        <P center>{t({ id: 'apartments-to-villas' })}</P>

        <Box center button>
          <Link to="/villas">
            <Button>{t({ id: 'villas-title' })}</Button>
          </Link> 
        </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    resort1: file(relativePath: { eq: "resort/resort-1-3x2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3240) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resort2mobile: file(relativePath: { eq: "resort/resort-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resort2desktop: file(relativePath: { eq: "resort/resort-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resort3mobile: file(relativePath: { eq: "resort/resort-3-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resort3desktop: file(relativePath: { eq: "resort/resort-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resort4mobile: file(relativePath: { eq: "resort/resort-4-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resort4desktop: file(relativePath: { eq: "resort/resort-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortNight1mobile: file(relativePath: { eq: "resort/resort-night-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortNight1desktop: file(relativePath: { eq: "resort/resort-night-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortNight2mobile: file(relativePath: { eq: "resort/resort-night-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resortNight2desktop: file(relativePath: { eq: "resort/resort-night-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Resort