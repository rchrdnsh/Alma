import React from 'react'
import { graphql } from 'gatsby'
import { Link, useIntl } from 'gatsby-plugin-intl'
// import styled from 'styled-components'
// import Img from 'gatsby-image'

import SEO from '../components/SEO'

import Content from '../components/Content'
import { HeadingContainer } from '../components/layout/FullContentCard'
import Arrow from '../components/Arrow'
import { Image } from '../components/Image'
import FlexContainer from '../components/layout/FlexContainer'
import FlexBox from '../components/layout/FlexBox'
import AlmaHeader from '../components/Header'
import { Button } from '../components/Button'
import { P } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'

// const Floorplan = styled(Img)`
//   width: 100%;
//   height: auto;
// `

// const FloorplanHeading = styled.h1`
//   margin: 1rem;
//   padding: 0;
//   text-transform: uppercase;
//   font-family: 'Quicksand', sans-serif;
//   font-size: 48px;
//   color: #006897;
// `

// const FloorplanParagraph = styled.p`
//   margin: 0.5rem;
//   padding: 0;
//   font-family: 'Work Sans', sans-serif;
//   font-size: 16px;
//   color: #006897;
// `

const Condos = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: "apartments-title" })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: "apartments-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.condo3desktop.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>{t({ id: "apartments-paragraph-1" })}</P>

      <Box full image>
        <Image rounded fluid={data.condo1desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "apartments-paragraph-2" })}</P>

      <Box full image>
        <Image rounded fluid={data.suite1desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "apartments-paragraph-3" })}</P>

      <Box full image>
        <Image rounded fluid={data.suite2desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "apartments-paragraph-4" })}</P>

      <Box full image>
        <Image rounded fluid={data.suite3desktop.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      {/* <Box center>
        <Space/>
        <AlmaHeader blue title={t({ id: "floorplans-title" })}></AlmaHeader>
      </Box>

      <Box full>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>
              {t({ id: "floorplan-a" })}
            </FloorplanHeading>
            <FloorplanParagraph>
              {t({ id: "floorplan-a-size" })}
            </FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-a-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-a-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanA.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </Box>

      <Box full>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{t({ id: "floorplan-b" })}</FloorplanHeading>
            <FloorplanParagraph>{t({ id: "floorplan-b-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-b-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-b-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanB.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </Box>

      <Box full>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{t({ id: "floorplan-c" })}</FloorplanHeading>
            <FloorplanParagraph>{t({ id: "floorplan-c-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-c-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-c-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanC.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </Box> */}

      <P center>{t({ id: "villas-to-restaurants" })}</P>

      <Box center button>
        <Link to="/restaurants">
          <Button>{t({ id: "restaurants-title" })}</Button>
        </Link> 
      </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    condo1mobile: file(relativePath: { eq: "condos/condo-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    condo1desktop: file(relativePath: { eq: "condos/condo-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    condo2mobile: file(relativePath: { eq: "condos/condo-2-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    condo2desktop: file(relativePath: { eq: "condos/condo-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    condo3mobile: file(relativePath: { eq: "condos/condo-3-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    condo3desktop: file(relativePath: { eq: "condos/condo-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    suite1mobile: file(relativePath: { eq: "condos/suite-living-room-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    suite1desktop: file(relativePath: { eq: "condos/suite-living-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    suite2mobile: file(relativePath: { eq: "condos/suite-bedroom-1-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    suite2desktop: file(relativePath: { eq: "condos/suite-bedroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    suite3mobile: file(relativePath: { eq: "condos/suite-bathroom-1-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    suite3desktop: file(relativePath: { eq: "condos/suite-bathroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    floorplanA: file(relativePath: { eq: "floorplans/plan-a.png" }) {
      childImageSharp {
        fluid(maxWidth: 2386) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanB: file(relativePath: { eq: "floorplans/plan-b.png" }) {
      childImageSharp {
        fluid(maxWidth: 2969) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanC: file(relativePath: { eq: "floorplans/plan-c.png" }) {
      childImageSharp {
        fluid(maxWidth: 3089) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Condos