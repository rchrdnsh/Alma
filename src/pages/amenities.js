import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
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

const Card = styled.figure`
  position: relative;
  flex: 0 0 auto;
  margin: 1rem 0.5rem;
  padding: 0.25rem;
  width: 80%;
  height: auto;
  background: white;
  line-height: 1;
  white-space: pre-wrap;
  border-radius: 8px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.5);

  :first-child {
    margin-left: 1rem;
  }

  :last-child {
    margin-right: -1rem;
  }

  @media (min-width: 50rem) {
    width: 40%;
  }
`

const Amenities = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  const spa1 = [
    data.spa1tall.childImageSharp.fluid,
    {
      ...data.spa1wide.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const spa2 = [
    data.spa2tall.childImageSharp.fluid,
    {
      ...data.spa2wide.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const spa3 = [
    data.spa3tall.childImageSharp.fluid,
    {
      ...data.spa3wide.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const spa4 = [
    data.spa4tall.childImageSharp.fluid,
    {
      ...data.spa4wide.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const spa6 = [
    data.spa6tall.childImageSharp.fluid,
    {
      ...data.spa6wide.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const almamart1 = [
    data.almamart1mobile.childImageSharp.fluid,
    {
      ...data.almamart1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const cinema1 = [
    data.cinema1mobile.childImageSharp.fluid,
    {
      ...data.cinema1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const tenniscourts1 = [
    data.tenniscourts1mobile.childImageSharp.fluid,
    {
      ...data.tenniscourts1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const kidsclub1 = [
    data.kidsclub1mobile.childImageSharp.fluid,
    {
      ...data.kidsclub1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const youthclub4 = [
    data.youthclub4mobile.childImageSharp.fluid,
    {
      ...data.youthclub4desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  return (
    <Content space={'2'}>

      <SEO title={t({ id: 'amenities-title' })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: 'amenities-title' })}/>
        </HeadingContainer>
        <Image grid fluid={spa3}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <Box center grid space={'2'}>
        <AlmaHeader white title={'Le Spa + Salon'}/>
        <P>Le Spa + Salon at the Alma Resort is a beautiful and lovingly appointed oasis that will titilate all of your senses. When you are here you can escape from lifes troubles and melt into a sea of tranquility while you are pampered from head to toe.</P>
      </Box>

      <Box full>
        <Box scroll blue>
          <Card>
            <Image card fluid={spa3} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={spa1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={spa2} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={spa4} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={spa6} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
        </Box>
      </Box>

      {/* <P center>{t({ id: 'amenities-paragraph-1' })}</P> */}

      <Box full image>
        <Image rounded fluid={tenniscourts1}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      {/* <P center>{t({ id: 'amenities-paragraph-2' })}</P> */}

      <Box full image>
        <Image rounded fluid={cinema1}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      {/* <P center>{t({ id: 'amenities-paragraph-3' })}</P> */}

      <Box full image>
        <Image rounded fluid={almamart1}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      {/* <P center>{t({ id: 'amenities-paragraph-4' })}</P> */}

      <Box full image>
        <Image rounded fluid={kidsclub1}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <Box full image>
        <Image rounded fluid={youthclub4}/>
        <Caption medium>Actual Image</Caption>
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
    almamart1mobile: file(relativePath: { eq: "amenities/alma-mart-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    almamart1desktop: file(relativePath: { eq: "amenities/alma-mart-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cinema1mobile: file(relativePath: { eq: "amenities/cinema-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cinema1desktop: file(relativePath: { eq: "amenities/cinema-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conventioncenter1mobile: file(relativePath: { eq: "amenities/convention-center-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conventioncenter1desktop: file(relativePath: { eq: "amenities/convention-center-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gym1mobile: file(relativePath: { eq: "amenities/gym-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gym1desktop: file(relativePath: { eq: "amenities/gym-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kidsclub1mobile: file(relativePath: { eq: "amenities/kids-club-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kidsclub1desktop: file(relativePath: { eq: "amenities/kids-club-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa1tall: file(relativePath: { eq: "amenities/spa-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa1wide: file(relativePath: { eq: "amenities/spa-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa2tall: file(relativePath: { eq: "amenities/spa-2-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa2wide: file(relativePath: { eq: "amenities/spa-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa3tall: file(relativePath: { eq: "amenities/spa-3-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa3wide: file(relativePath: { eq: "amenities/spa-3-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa4tall: file(relativePath: { eq: "amenities/spa-4-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa4wide: file(relativePath: { eq: "amenities/spa-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa6tall: file(relativePath: { eq: "amenities/spa-6-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa6wide: file(relativePath: { eq: "amenities/spa-6-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tenniscourts1mobile: file(relativePath: { eq: "amenities/tennis-courts-1-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tenniscourts1desktop: file(relativePath: { eq: "amenities/tennis-courts-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    youthclub4mobile: file(relativePath: { eq: "amenities/youth-club-4-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    youthclub4desktop: file(relativePath: { eq: "amenities/youth-club-4-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Amenities