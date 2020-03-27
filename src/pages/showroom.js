import React from 'react'
import { graphql } from 'gatsby'
import { Link, useIntl } from 'gatsby-plugin-intl'

import SEO from '../components/seo'

import Content from '../components/Content'
import Box from '../components/Box'
import { Image } from '../components/Image'
import { HeadingContainer } from '../components/layout/FullContentCard'
import Arrow from '../components/Arrow'
import AlmaHeader from '../components/Header'
import { Button } from '../components/Button'
import { A, H1, H2, P } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'

const Showroom = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: "showroom-title" })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: "showroom-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.entrance.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <AlmaHeader center blue title={t({ id: "showroom-title" })}/>
      <P center>{t({ id: "showroom-paragraph-1" })}</P>
      <P center>{t({ id: "showroom-paragraph-2" })}</P>
      <H2 center>{t({ id: "alma-phone-number-title" })}</H2>
      <A center href="tel:+17146898554"><P>1.714.689.8554</P></A>
      <H2 center>{t({ id: "showroom-address-title" })}</H2>
      <P center>{t({ id: "showroom-address" })}</P>
      <P center>{t({ id: "showroom-location" })}</P>
      <P center>{t({ id: "showroom-zipcode" })}</P>
      <H2 center>{t({ id: "showroom-hours-title" })}</H2>
      <P center>{t({ id: "showroom-hours-week" })}</P>
      <P center>{t({ id: "showroom-hours-weekend" })}</P>
      <H2 center>{t({ id: "showroom-email-title" })}</H2>
      <A center href="mailto:travel@alma.vacations"><P>travel@alma.vacations</P></A>
      <H2 center>{t({ id: "showroom-website-title" })}</H2>
      <A center href="https://alma.vacations"><P>alma.vacations</P></A>

      <Box full image>
        <Image rounded fluid={data.waitingArea.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.hallway.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.presentationRoom1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.presentationRoom2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.conferenceRoom.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.kitchen1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.kitchen2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.model.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.salesArea1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.salesArea2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.salesArea3.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.office1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.office2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.office3.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.office4.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.office5.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    showroom1: file(relativePath: { eq: "showroom/showroom-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom2: file(relativePath: { eq: "showroom/showroom-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom3: file(relativePath: { eq: "showroom/showroom-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom4: file(relativePath: { eq: "showroom/showroom-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom5: file(relativePath: { eq: "showroom/showroom-5-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom6: file(relativePath: { eq: "showroom/showroom-6-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom7: file(relativePath: { eq: "showroom/showroom-7-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom8: file(relativePath: { eq: "showroom/showroom-8-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showroom9: file(relativePath: { eq: "showroom/showroom-9-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    entrance: file(relativePath: { eq: "showroom/entrance-3x2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waitingArea: file(relativePath: { eq: "showroom/waiting-area-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hallway: file(relativePath: { eq: "showroom/hallway-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    presentationRoom1: file(relativePath: { eq: "showroom/presentation-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    presentationRoom2: file(relativePath: { eq: "showroom/presentation-room-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conferenceRoom: file(relativePath: { eq: "showroom/conference-room-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kitchen1: file(relativePath: { eq: "showroom/kitchen-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kitchen2: file(relativePath: { eq: "showroom/kitchen-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    model: file(relativePath: { eq: "showroom/3D-model-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    salesArea1: file(relativePath: { eq: "showroom/sales-area-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    salesArea2: file(relativePath: { eq: "showroom/sales-area-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    salesArea3: file(relativePath: { eq: "showroom/sales-area-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office1: file(relativePath: { eq: "showroom/office-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office2: file(relativePath: { eq: "showroom/office-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office3: file(relativePath: { eq: "showroom/office-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office4: file(relativePath: { eq: "showroom/office-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    office5: file(relativePath: { eq: "showroom/office-5-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Showroom