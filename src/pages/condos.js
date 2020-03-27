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
        <Image grid fluid={data.apartmentLivingRoom1.childImageSharp.fluid}/>
        <Caption large>Artist Rendering</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>{t({ id: "apartments-paragraph-1" })}</P>

      <Box full image>
        <Image rounded fluid={data.apartmentLivingRoom2.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "apartments-paragraph-2" })}</P>

      <Box full image>
        <Image rounded fluid={data.apartmentKitchen.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "apartments-paragraph-3" })}</P>

      <Box full image>
        <Image rounded fluid={data.apartmentBedroom.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "apartments-paragraph-4" })}</P>

      <Box full image>
        <Image rounded fluid={data.apartmentBathroom.childImageSharp.fluid}/>
        <Caption medium>Artist Rendering</Caption>
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
    apartmentLivingRoom1: file(relativePath: { eq: "apartments/apartment-living-room-1-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentLivingRoom2: file(relativePath: { eq: "apartments/apartment-living-room-2-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentKitchen: file(relativePath: { eq: "apartments/apartment-kitchen-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBedroom: file(relativePath: { eq: "apartments/apartment-bedroom-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBathroom: file(relativePath: { eq: "apartments/apartment-bathroom-render-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
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