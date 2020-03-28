import React from 'react'
import { graphql } from 'gatsby'
import { Link, useIntl } from 'gatsby-plugin-intl'

import SEO from '../components/SEO'

import Content from '../components/Content'
import Box from '../components/Box'
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

const Villas = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: "villas-title" })} />

      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: "villas-title" })}/>
        </HeadingContainer>
        <Image
          grid
          fluid={data.realVillaExterior1.childImageSharp.fluid}
        />
        <Caption medium>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>{t({ id: "villas-paragraph-1" })}</P>

      <Box full image>
        <Image rounded fluid={data.villaDining1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "villas-paragraph-2" })}</P>

      <Box full image>
        <Image rounded fluid={data.villaLivingRoom2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "villas-paragraph-3" })}</P>

      <Box full image>
        <Image rounded fluid={data.villaBedroom1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <P center>{t({ id: "villas-paragraph-4" })}</P>

      <Box full image>
        <Image rounded fluid={data.villaBathroom1.childImageSharp.fluid}/>
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
            <FloorplanHeading>{t({ id: "floorplan-d" })}</FloorplanHeading>
            <FloorplanParagraph>{t({ id: "floorplan-d-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-d-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-d-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanD.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </Box>

      <Box full>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{t({ id: "floorplan-e" })}</FloorplanHeading>
            <FloorplanParagraph>{t({ id: "floorplan-e-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-e-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-e-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanE.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </Box>

      <Box full>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{t({ id: "floorplan-f" })}</FloorplanHeading>
            <FloorplanParagraph>{t({ id: "floorplan-f-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-f-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-f-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanF.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </Box>

      <Box full>
        <FlexContainer>
          <FlexBox>
            <FloorplanHeading>{t({ id: "floorplan-g" })}</FloorplanHeading>
            <FloorplanParagraph>{t({ id: "floorplan-g-size" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-g-bedrooms" })}</FloorplanParagraph>
            <FloorplanParagraph>{t({ id: "floorplan-g-capacity" })}</FloorplanParagraph>
          </FlexBox>
          <FlexBox>
            <Floorplan fluid={data.floorplanG.childImageSharp.fluid}/>
          </FlexBox>
        </FlexContainer>
      </Box> */}

      <P center>{t({ id: "resort-to-apartments" })}</P>

      <Box center button>
        <Link to="/condos">
          <Button>{t({ id: "apartments-title" })}</Button>
        </Link> 
      </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    villaExterior1: file(relativePath: { eq: "villas/villa-exterior-render-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaExterior1: file(relativePath: { eq: "villas/real-villa-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaExterior2: file(relativePath: { eq: "villas/real-villa-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaExterior3: file(relativePath: { eq: "villas/real-villa-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior1: file(relativePath: { eq: "villas/real-villa-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior2: file(relativePath: { eq: "villas/real-villa-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    realVillaInterior3: file(relativePath: { eq: "villas/real-villa-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom1: file(relativePath: { eq: "villas/villa-living-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom2: file(relativePath: { eq: "villas/villa-living-room-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaDining1: file(relativePath: { eq: "villas/villa-dining-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBedroom1: file(relativePath: { eq: "villas/villa-bedroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBathroom1: file(relativePath: { eq: "villas/villa-bathroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    floorplanD: file(relativePath: { eq: "floorplans/plan-d.png" }) {
      childImageSharp {
        fluid(maxWidth: 3299) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanE: file(relativePath: { eq: "floorplans/plan-e.png" }) {
      childImageSharp {
        fluid(maxWidth: 3339) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanF: file(relativePath: { eq: "floorplans/plan-f.png" }) {
      childImageSharp {
        fluid(maxWidth: 3218) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorplanG: file(relativePath: { eq: "floorplans/plan-g.png" }) {
      childImageSharp {
        fluid(maxWidth: 3262) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Villas