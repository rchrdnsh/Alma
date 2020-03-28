import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, useIntl } from 'gatsby-plugin-intl'

import SEO from '../components/SEO'

import Content from '../components/Content'
import AlmaHeader from '../components/Header'
import { P } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import { Image } from '../components/Image'
import Box from '../components/Box'
import { Button } from '../components/Button'

import almaLogoWithBG from '../images/alma/alma-logo-with-bg.svg'

import resortVideo from '../videos/alma-resort-1-minute.mp4'

import Arrow from '../components/Arrow'

import Footer from '../components/Footer'

const Video = styled.video`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  width: 100%;
  height: 100%;
  z-index: 2;
  align-self: stretch;
  justify-self: stretch;
  object-fit: cover;
`

const Scrimm = styled.div`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  width: 100%;
  height: 100%;
  z-index: 3;
  align-self: stretch;
  justify-self: stretch;
  object-fit: cover;
  /* background: hsla(0,0%,0%,0.25); */
  background-image: linear-gradient(to bottom, hsla(30, 73%, 60%, 0.2) 0%, hsla(199, 45%, 44%, 0.5) 100%);
`

const Logo = styled.img`
  width: calc(192px + (320 - 192) * ((100vw - 300px) / (1600 - 300)));
  height: auto;
  grid-row: 1 / 3;
  grid-column: 1 / 9;
  align-self: center;
  justify-self: center;
  z-index: 4;

  @media (orientation: landscape) {
    display: none;
  }
`

const Slogan = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 9;
  z-index: 5;
  color: white;
  font-size: calc(18px + (36 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-family: 'Quicksand';
  align-self: start;
  justify-self: center;
  margin-bottom: 1rem;
  text-shadow: 0px 0px 12px rgba(0,0,0,0.5);

  @media (orientation: landscape) {
    grid-row: 1 / 3;
    grid-column: 1 / 9;
    align-self: center;
  }
`

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

// const RCIMap = styled(Image)`
//   width: 100%;
//   height: auto;
// `

// const NewsContainer = styled.div`
//   z-index: 5;
//   grid-column: 1 / 8;
//   margin: 0;
//   padding: 2rem;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: auto;
//   grid-gap: 2rem;

//   @media (min-width: 800px) {
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 2rem;
//   }

//   @media (min-width: 1600px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media (orientation: landscape) {
//     .content-grid {
//       margin: 2rem;
//      }
//    }
// `

// const NewsCardOne = styled(Link)`
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 16px;
//   display: grid;
//   z-index: 1;
//   grid-template-columns: repeat(12, 1fr);
//   grid-template-rows: repeat(8, 1fr);
//   transition: All 250ms ease;
//   box-shadow: 
//     0 13px 27px -5px rgba(50,50,93,.25),
//     0 8px 16px -8px rgba(0,0,0,.3),
//     0 -6px 16px -6px rgba(0,0,0,.025)
//   ;
//   transform: translateY(0px);

//   :hover {
//     box-shadow:
//       0 30px 60px -12px rgba(50,50,93,.25),
//       0 18px 36px -18px rgba(0,0,0,.3),
//       0 -12px 36px -8px rgba(0,0,0,.025)
//     ;
//     transform: translateY(-2px);
//   }

//   :active {
//     transition: All 100ms ease;
//     transform: translateY(2px);
//   }

//   @media (min-width: 50rem) {
//   }
// `

// const NewsTitleOne = styled.h1`
//   text-shadow: 0px 0px 8px hsla(360, 100%, 100%, 1);
//   font-size: calc(32px + (64 - 32) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'Caveat', sans-serif;
//   font-weight: normal;
//   color: #fff;
//   margin: 0;
//   padding: 0 0 0 1rem;
//   font-weight: normal;
//   color: #fff;
//   line-height: 1;
//   font-style: bold;
//   grid-column: 1 / 13;
//   grid-row: 5 / 7;
//   align-self: end;
//   z-index: 10;

//   @media (min-width: 800px) {
//     font-size: calc(16px + (64 - 16) * ((100vw - 300px) / (1600 - 300)));
//   }
// `

// const NewsSubtitleOne = styled.h2`
//   text-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
//   font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'Open Sans', sans-serif;
//   color: #fff;
//   margin: 0;
//   padding: 0 0 0 1rem;
//   font-size: 12px;
//   color: #fff;
//   line-height: 1;
//   align-self: center;
//   font-style: normal;
//   grid-column: 1 / 13;
//   grid-row: 7 / 8;
//   z-index: 10;

//   @media (min-width: 800px) {
//     font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
//   }
// `

// const NewsDateOne = styled.h3`
//   text-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
//   font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'Open Sans', sans-serif;
//   color: #fff;
//   grid-column: 1 / 13;
//   grid-row: 8 / 9;
//   z-index: 10;
//   padding: 0 0 0 1rem;
//   margin: 0;
// `

// const NewsImageOne = styled(Img)`
//   grid-column: 1 / 13;
//   grid-row: 1 / 9;
//   width: 100%;
//   height: auto;
//   border-radius: 16px;
//   z-index: 1;
// `

// const NewsScrimOne = styled.div`
//   grid-column: 1 / 13;
//   grid-row: 1 / 9;
//   background: linear-gradient(
//     to bottom,
//     hsla(0, 0%, 0%, 0) 0%,
//     hsla(0, 0%, 0%, 0.006) 8.1%,
//     hsla(0, 0%, 0%, 0.024) 15.5%,
//     hsla(0, 0%, 0%, 0.052) 22.5%,
//     hsla(0, 0%, 0%, 0.088) 29%,
//     hsla(0, 0%, 0%, 0.13) 35.3%,
//     hsla(0, 0%, 0%, 0.176) 41.2%,
//     hsla(0, 0%, 0%, 0.225) 47.1%,
//     hsla(0, 0%, 0%, 0.275) 52.9%,
//     hsla(0, 0%, 0%, 0.324) 58.8%,
//     hsla(0, 0%, 0%, 0.37) 64.7%,
//     hsla(0, 0%, 0%, 0.412) 71%,
//     hsla(0, 0%, 0%, 0.448) 77.5%,
//     hsla(0, 0%, 0%, 0.476) 84.5%,
//     hsla(0, 0%, 0%, 0.494) 91.9%,
//     hsla(0, 0%, 0%, 0.5) 100%
//   );
//   border-radius: 16px;
//   z-index: 2;
// `

// const NewsCard = styled(Link)`
//   text-decoration: none;
//   background: white;
//   border-radius: 16px;
//   z-index: 1;
//   box-shadow: 
//     0 13px 27px -5px rgba(50,50,93,0.1),
//     0 8px 16px -8px rgba(0,0,0,0.15),
//     0 -6px 16px -6px rgba(0,0,0,0.01)
//   ;
// `

// const NewsImage = styled(Img)`
//   position: relative;
//   margin: 0;
//   border-radius: 16px 16px 0 0;
//   z-index: 0;
//   background: white;
//   box-shadow: 
//     0 13px 27px -5px rgba(50,50,93,.25),
//     0 8px 16px -8px rgba(0,0,0,.3),
//     0 -6px 16px -6px rgba(0,0,0,.025)
//   ;
//   mask-image: linear-gradient(
//     to top,
//     hsla(0, 0%, 100%, 0) 0%,
//     hsla(0, 0%, 100%, 0.013) 8.1%,
//     hsla(0, 0%, 100%, 0.049) 15.5%,
//     hsla(0, 0%, 100%, 0.104) 22.5%,
//     hsla(0, 0%, 100%, 0.175) 29%,
//     hsla(0, 0%, 100%, 0.259) 35.3%,
//     hsla(0, 0%, 100%, 0.352) 41.2%,
//     hsla(0, 0%, 100%, 0.45) 47.1%,
//     hsla(0, 0%, 100%, 0.55) 52.9%,
//     hsla(0, 0%, 100%, 0.648) 58.8%,
//     hsla(0, 0%, 100%, 0.741) 64.7%,
//     hsla(0, 0%, 100%, 0.825) 71%,
//     hsla(0, 0%, 100%, 0.896) 77.5%,
//     hsla(0, 0%, 100%, 0.951) 84.5%,
//     hsla(0, 0%, 100%, 0.987) 91.9%,
//     hsl(0, 0%, 100%) 100%)
//   ;
// `

// const NewsTitle = styled.h1`
//   font-size: calc(16px + (64 - 16) * ((100vw - 300px) / (1600 - 300)));
//   font-family: 'DM Serif Display';
//   color: black;
//   margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
//   z-index: 2;
// `

// const NewsDate = styled.p`
//   font-size: 12px;
//   font-family: 'DM Serif Display';
//   font-style: italic;
//   margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
// `

// const NewsSubtitle = styled.p`
//   font-size: calc(10px + (16 - 10) * ((100vw - 300px) / (1600 - 300)));
//   margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
// `

// const AlmaSeparator = styled.hr`
//   margin: 1rem 2rem;
//   border: 0;
//   height: 1px;
//   background-image: linear-gradient(
//     to right,
//     hsla(29, 47%, 75%, 1),
//     hsla(29, 47%, 75%, 1),
//     hsla(29, 47%, 75%, 1)
//   );
// `

// const NewsExcerpt = styled.p`
//   font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
//   margin: calc(8px + (32 - 8) * ((100vw - 300px) / (1600 - 300)));
// `

const InstaGrid = styled.div`
  margin: 0;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const InstaPost = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 16px;
  box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.15);
  position: relative;
  transition: All 250ms ease;
  box-shadow: 
    0 13px 27px -5px rgba(50,50,93,.25),
    0 8px 16px -8px rgba(0,0,0,.3),
    0 -6px 16px -6px rgba(0,0,0,.025)
  ;
  
  :hover {
    box-shadow:
      0 30px 60px -12px rgba(50,50,93,.25),
      0 18px 36px -18px rgba(0,0,0,.3),
      0 -12px 36px -8px rgba(0,0,0,.025)
    ;
    transform: translateY(-2px);
  }
`

const InstaSpacer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
`

const InstaImage = styled(Img)`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  margin: 0;
  padding: 0;
  border-radius: 16px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const InstaScrim = styled.div`
  grid-column: 1 / 9;
  grid-row: 1 / 9;
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.003) 8.1%,
    hsla(0, 0%, 0%, 0.012) 15.5%,
    hsla(0, 0%, 0%, 0.026) 22.5%,
    hsla(0, 0%, 0%, 0.044) 29%,
    hsla(0, 0%, 0%, 0.065) 35.3%,
    hsla(0, 0%, 0%, 0.088) 41.2%,
    hsla(0, 0%, 0%, 0.113) 47.1%,
    hsla(0, 0%, 0%, 0.137) 52.9%,
    hsla(0, 0%, 0%, 0.162) 58.8%,
    hsla(0, 0%, 0%, 0.185) 64.7%,
    hsla(0, 0%, 0%, 0.206) 71%,
    hsla(0, 0%, 0%, 0.224) 77.5%,
    hsla(0, 0%, 0%, 0.238) 84.5%,
    hsla(0, 0%, 0%, 0.247) 91.9%,
    hsla(0, 0%, 0%, 0.25) 100%
  );
  z-index: 1;
  border-radius: 16px;
`

const VideoBox = styled.div`
  position: relative;
	padding-bottom: 52.75%;
	padding-top: 25px;
	height: 0;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Index = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  const resort2 = [
    data.resort2mobile.childImageSharp.fluid,
    {
      ...data.resort2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const resort3 = [
    data.resort3mobile.childImageSharp.fluid,
    {
      ...data.resort3desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const resort4 = [
    data.resort4mobile.childImageSharp.fluid,
    {
      ...data.resort4desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const resortNight1 = [
    data.resortNight1mobile.childImageSharp.fluid,
    {
      ...data.resortNight1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const resortNight2 = [
    data.resortNight2mobile.childImageSharp.fluid,
    {
      ...data.resortNight2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const villaexterior1 = [
    data.villa1mobile.childImageSharp.fluid,
    {
      ...data.villa1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const villaexterior2 = [
    data.villa2mobile.childImageSharp.fluid,
    {
      ...data.villa2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const villaexterior3 = [
    data.villa3mobile.childImageSharp.fluid,
    {
      ...data.villa3desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const villaexterior4 = [
    data.villa4mobile.childImageSharp.fluid,
    {
      ...data.villa4desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const condo1 = [
    data.condo1mobile.childImageSharp.fluid,
    {
      ...data.condo1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const condo2 = [
    data.condo2mobile.childImageSharp.fluid,
    {
      ...data.condo2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const condo3 = [
    data.condo3mobile.childImageSharp.fluid,
    {
      ...data.condo3desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const almagarden1 = [
    data.almagarden1mobile.childImageSharp.fluid,
    {
      ...data.almagarden1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const almagarden2 = [
    data.almagarden2mobile.childImageSharp.fluid,
    {
      ...data.almagarden2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const americanbar1 = [
    data.americanbar1mobile.childImageSharp.fluid,
    {
      ...data.americanbar1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const americanbar2 = [
    data.americanbar2mobile.childImageSharp.fluid,
    {
      ...data.americanbar2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const americanbar3 = [
    data.americanbar3mobile.childImageSharp.fluid,
    {
      ...data.americanbar3desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const asiana1 = [
    data.asiana1mobile.childImageSharp.fluid,
    {
      ...data.asiana1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const asiana2 = [
    data.asiana2mobile.childImageSharp.fluid,
    {
      ...data.asiana2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const atlantis1 = [
    data.atlantis1mobile.childImageSharp.fluid,
    {
      ...data.atlantis1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const atlantis2 = [
    data.atlantis2mobile.childImageSharp.fluid,
    {
      ...data.atlantis2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const beachbar1 = [
    data.beachbar1mobile.childImageSharp.fluid,
    {
      ...data.beachbar1desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const beachbar2 = [
    data.beachbar2mobile.childImageSharp.fluid,
    {
      ...data.beachbar2desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const beachbar3 = [
    data.beachbar3mobile.childImageSharp.fluid,
    {
      ...data.beachbar3desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const beachbar4 = [
    data.beachbar4mobile.childImageSharp.fluid,
    {
      ...data.beachbar4desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const beachbar5 = [
    data.beachbar5mobile.childImageSharp.fluid,
    {
      ...data.beachbar5desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const beachbar6 = [
    data.beachbar6mobile.childImageSharp.fluid,
    {
      ...data.beachbar6desktop.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ]

  const beachbar7 = [
    data.beachbar7mobile.childImageSharp.fluid,
    {
      ...data.beachbar7desktop.childImageSharp.fluid,
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

  const spa3 = [
    data.spa3mobile.childImageSharp.fluid,
    {
      ...data.spa3desktop.childImageSharp.fluid,
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

  return (
    <Content space={'3'}>

      <SEO title="Home" />

      <Box featured>
        <Logo src={almaLogoWithBG} alt="The Alma Resort Logo."/>
        <Slogan>{t({ id: 'slogan' })}</Slogan>
        <Image grid fluid={data.resort1.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Scrimm/>
        <Video
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={resortVideo} type="video/mp4"/>
        </Video>
        <Arrow/>
      </Box>
  
      <Box center grid space={'2'}>
        <AlmaHeader blue title={t({ id: 'resort-title' })}/>
        <VideoBox>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/iqVAGPLCk58"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          >
          </iframe>
        </VideoBox>
        <Box button>
          <Link to="/resort">
            <Button>{t({ id: "resort-title" })}</Button>
          </Link>
        </Box>
      </Box>
  
      <Box full>
        <Box scroll orange>
          <Card>
            <Image card fluid={resort4} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={resort2} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={resort3} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={resortNight1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={resortNight2} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
        </Box>
      </Box>

      <Box center grid space={'2'}>
        <AlmaHeader white title={t({ id: "villas-title" })} />
        <P>{t({ id: "villas-intro-paragraph" })}</P>
        <Box button>
          <Link to="/villas">
            <Button>{t({ id: "villas-title" })}</Button>
          </Link> 
        </Box>
      </Box>

      <Box full>
        <Box scroll blue>
          <Card>
            <Image card fluid={villaexterior1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={villaexterior2} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={villaexterior3} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={villaexterior4} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
        </Box>
      </Box>

      <Box center grid space={'2'}>
        <AlmaHeader white title={t({ id: "apartments-title" })} />
        <P>{t({ id: "apartments-intro-paragraph" })}</P>
        <Box button>
          <Link to="/apartments">
            <Button>{t({ id: "apartments-title" })}</Button>
          </Link> 
        </Box>
      </Box>

      <Box full>
        <Box scroll blue> 
          <Card>
            <Image card fluid={condo1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={condo2} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={condo3} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
        </Box>
      </Box>

      <Box center grid space={'2'}>
        <AlmaHeader white title={t({ id: "restaurants-title" })} />
        <P>{t({ id: "restaurants-intro-paragraph" })}</P>
        <Box button>
          <Link to="/restaurants">
            <Button>{t({ id: "restaurants-title" })}</Button>
          </Link> 
        </Box>
      </Box>

      <Box full>
        <Box scroll blue>
          <Card>
            <Image card fluid={almagarden1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={americanbar1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={asiana1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={atlantis1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={atlantis2} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={beachbar7} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
        </Box>
      </Box>

      <Box center grid space={'2'}>
        <AlmaHeader white title={t({ id: "amenities-title" })} />
        <P>{t({ id: "amenities-intro-paragraph" })}</P>
        <Box button>
          <Link to="/amenities">
            <Button>{t({ id: "amenities-title" })}</Button>
          </Link> 
        </Box>
      </Box>

      <Box full>
        <Box scroll blue>
          <Card>
            <Image card fluid={spa3} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={cinema1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={kidsclub1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={tenniscourts1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
          <Card>
            <Image card fluid={almamart1} alt="The Alma Resort."/>
            <Caption small>Actual Image</Caption>
            <Watermark small/>
          </Card>
        </Box>
      </Box>

      <Box center grid space={'2'}>
        <AlmaHeader white title={t({ id: "news-title" })} />
        <P>{t({ id: "news-intro-paragraph" })}</P>
        <Box button>
          <Link to="/news">
            <Button>{t({ id: "news-title" })}</Button>
          </Link> 
        </Box>
      </Box>

      {/* <Box center>
        <AlmaHeader blue title={intl.formatMessage({ id: "vacations-title" })} />
        <P>{intl.formatMessage({ id: "vacations-intro-paragraph" })}</P>
        <Box button>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "vacations-title" })}</Button>
          </Link> 
        </Box>
      </Box>

      <Box full>
        <RCIMap fluid={data.rciMap.childImageSharp.fluid}/>
      </Box> */}
      
      {/* <Box center>
        <AlmaHeader blue title={intl.formatMessage({ id: "alma-title" })} />
        <P>{intl.formatMessage({ id: "alma-intro-paragraph" })}</P>
        <Box button>
          <Link to="/vacations">
            <Button>{intl.formatMessage({ id: "alma-title" })}</Button>
          </Link> 
        </Box>
      </Box> */}

      {/* <Box full>
        <NewsContainer>
          {data.articles.edges.map(({ node }) => (
            <NewsCardOne key={node.id} to={node.fields.slug}>
              <NewsTitleOne>{node.frontmatter.title}</NewsTitleOne>
              <NewsSubtitleOne>{node.frontmatter.subtitle}</NewsSubtitleOne>
              <NewsDateOne>{node.frontmatter.date}</NewsDateOne>
              <NewsImageOne fluid={node.frontmatter.image.childImageSharp.fluid} alt="cool stuff." />
              <NewsScrimOne />
            </NewsCardOne>
          ))}
        </NewsContainer>
      </Box> */}

      {/* <Box full>
        <NewsContainer>
          {data.articles.edges.map(({ node }) => (
            <NewsCard key={node.id} to={node.fields.slug}>
              <NewsImage fluid={node.frontmatter.image.childImageSharp.fluid} alt="cool stuff." />
              <NewsTitle>{node.frontmatter.title}{" "}</NewsTitle>
              <NewsDate>{node.frontmatter.date}</NewsDate>
              <NewsSubtitle>{node.frontmatter.subtitle}</NewsSubtitle>
              <AlmaSeparator/>
              <NewsExcerpt>{node.excerpt}</NewsExcerpt>
            </NewsCard>
          ))}
        </NewsContainer>
      </Box> */}
        
      <Box center>
        <AlmaHeader blue title='Instagram' />
        <P>{t({ id: "instagram-paragraph" })}</P>
      </Box>

      <Box full>
        <InstaGrid>
          {data.allInstaNode.edges.map(({ node }) => (
            <InstaPost key={node.id}>
              <InstaSpacer>
                <InstaScrim />
                <InstaImage
                  fluid={node.localFile.childImageSharp.fluid}
                  alt="An Alma Instagram image."
                />
              </InstaSpacer>
            </InstaPost>
          ))}
        </InstaGrid>
      </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    # articles: allMdx(
    #   sort: {
    #     fields: frontmatter___order},
    #     filter: {
    #       fileAbsolutePath: {regex: "/content/news/"},
    #       frontmatter: {status: {eq: "published"} }
    #   }
    # )
    # {
    #   totalCount
    #   edges {
    #     node {
    #       id
    #       timeToRead
    #       fields {
    #         slug
    #       }
    #       frontmatter {
    #         title
    #         subtitle
    #         image {
    #           childImageSharp {
    #             fluid(maxWidth: 3840) {
    #             ...GatsbyImageSharpFluid
    #             }
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
    allInstaNode(sort: { fields: [timestamp], order: DESC }) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 256) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
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
    villa1mobile: file(relativePath: { eq: "villas/villa-exterior-1-3x4-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villa1desktop: file(relativePath: { eq: "villas/villa-exterior-1-4x3-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villa2mobile: file(relativePath: { eq: "villas/villa-exterior-2-3x4-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villa2desktop: file(relativePath: { eq: "villas/villa-exterior-2-4x3-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villa3mobile: file(relativePath: { eq: "villas/villa-exterior-3-3x4-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villa3desktop: file(relativePath: { eq: "villas/villa-exterior-3-4x3-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villa4mobile: file(relativePath: { eq: "villas/villa-exterior-4-3x4-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villa4desktop: file(relativePath: { eq: "villas/villa-exterior-4-4x3-compressor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
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
    apartmentLivingRoom1: file(relativePath: { eq: "apartments/apartment-living-room-1-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentLivingRoom2: file(relativePath: { eq: "apartments/apartment-living-room-2-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentKitchen: file(relativePath: { eq: "apartments/apartment-kitchen-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBedroom: file(relativePath: { eq: "apartments/apartment-bedroom-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartmentBathroom: file(relativePath: { eq: "apartments/apartment-bathroom-render-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    villaExterior1: file(relativePath: { eq: "villas/villa-exterior-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaExterior4: file(relativePath: { eq: "villas/villa-exterior-4-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom1: file(relativePath: { eq: "villas/villa-living-room-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaLivingRoom2: file(relativePath: { eq: "villas/villa-living-room-3-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaDining1: file(relativePath: { eq: "villas/villa-dining-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBedroom1: file(relativePath: { eq: "villas/villa-bedroom-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    villaBathroom1: file(relativePath: { eq: "villas/villa-bathroom-1-1x1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
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
    spa3mobile: file(relativePath: { eq: "amenities/spa-3-3x4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1620) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spa3desktop: file(relativePath: { eq: "amenities/spa-3-4x3.jpg" }) {
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

export default Index