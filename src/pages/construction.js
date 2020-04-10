import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import SEO from '../components/SEO'

import Content from '../components/Content'

import { Image } from '../components/Image'
import { HeadingContainer } from '../components/layout/FullContentCard'
import AlmaHeader from '../components/Header'
import { P } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'
import Box from '../components/Box'

import Footer from '../components/Footer'

const VideoBox = styled.div`
  grid-column: ${props =>
    props.full ? `1/4`:
    props.center ? `2/3`:
    ``
  };
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

const Construction = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: "construction-title" })}/>
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: "construction-title" })}/>
        </HeadingContainer>
        <Image grid fluid={data.oct9.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-october-2019" })}/>
      <VideoBox center>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RwCOgvo7v-Q" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </VideoBox>
      <P center>{t({ id: "construction-october-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-october-2019-paragraph-2" })}</P>
      <P center>{t({ id: "construction-october-2019-paragraph-3" })}</P>
      <P center>{t({ id: "construction-october-2019-paragraph-4" })}</P>
      <P center>{t({ id: "construction-october-2019-paragraph-5" })}</P>
      <Box full image>
        <Image rounded fluid={data.oct1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct3.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct4.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct5.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct6.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct7.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct8.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct9.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct10.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct11.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct12.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct13.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct14.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct15.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct16.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct17.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct18.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.oct19.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-september-2019" })}/>
      <VideoBox center>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aMAqzBtGkBQ" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </VideoBox>
      <P center>{t({ id: "construction-september-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-september-2019-paragraph-2" })}</P>
      <P center>{t({ id: "construction-september-2019-paragraph-3" })}</P>
      <P center>{t({ id: "construction-september-2019-paragraph-4" })}</P>
      <Box full image>
        <Image rounded fluid={data.sep1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.sep2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.sep3.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.sep4.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.sep5.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.sep6.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.sep7.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.sep8.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.sep9.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-august-2019" })}/>
      <VideoBox center>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5HuINkl3sOQ" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </VideoBox>
      <P center>{t({ id: "construction-august-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-august-2019-paragraph-2" })}</P>
      <P center>{t({ id: "construction-august-2019-paragraph-3" })}</P>
      <Box full image>
        <Image rounded fluid={data.june2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june3.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june4.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june5.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-july-2019" })}/>
      <VideoBox center>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-4dKHaaCMK0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </VideoBox>
      <P center>{t({ id: "construction-july-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-july-2019-paragraph-2" })}</P>
      <P center>{t({ id: "construction-july-2019-paragraph-3" })}</P>
      <P center>{t({ id: "construction-july-2019-paragraph-4" })}</P>
      <Box full image>
        <Image rounded fluid={data.june6.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june7.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june8.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june9.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-june-2019" })}/>
      <VideoBox center>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pOXP2Dbzxo4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </VideoBox>
      <P center>{t({ id: "construction-june-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-june-2019-paragraph-2" })}</P>
      <P center>{t({ id: "construction-june-2019-paragraph-3" })}</P>
      <P center>{t({ id: "construction-june-2019-paragraph-4" })}</P>
      <Box full image>
        <Image rounded fluid={data.june10.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june11.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june12.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.june13.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-may-2019" })}/>
      <VideoBox>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5yhsB7AL31A" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </VideoBox>
      <P center>{t({ id: "construction-may-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-may-2019-paragraph-2" })}</P>
      <P center>{t({ id: "construction-may-2019-paragraph-3" })}</P>
      <Box full image>
        <Image rounded fluid={data.may1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.may2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-april-2019" })}/>
      <VideoBox center>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Dsk_phQSaeE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </VideoBox>
      <P center>{t({ id: "construction-april-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-april-2019-paragraph-2" })}</P>
      <Box full image>
        <Image rounded fluid={data.april1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-march-2019" })}/>
      <VideoBox center>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aux2HbWQlTk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </VideoBox>
      <P center>{t({ id: "construction-march-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-march-2019-paragraph-2" })}</P>
      <P center>{t({ id: "construction-march-2019-paragraph-3" })}</P>
      <Box full image>
        <Image rounded fluid={data.march1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-february-2019" })}/>
      <P center>{t({ id: "construction-february-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-february-2019-paragraph-2" })}</P>
      <Box full image>
        <Image rounded fluid={data.feb1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>
      <Box full image>
        <Image rounded fluid={data.feb2.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <AlmaHeader center blue title={t({ id: "construction-january-2019" })}/>
      <P center>{t({ id: "construction-january-2019-paragraph-1" })}</P>
      <P center>{t({ id: "construction-january-2019-paragraph-2" })}</P>
      <Box full image>
        <Image rounded fluid={data.jan1.childImageSharp.fluid}/>
        <Caption medium>Actual Image</Caption>
        <Watermark medium/>
      </Box>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    jan1: file(relativePath: { eq: "construction/01-january-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    feb1: file(relativePath: { eq: "construction/02-february-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    feb2: file(relativePath: { eq: "construction/02-february-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    march1: file(relativePath: { eq: "construction/03-march-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    april1: file(relativePath: { eq: "construction/04-april-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    may1: file(relativePath: { eq: "construction/05-may-1-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    may2: file(relativePath: { eq: "construction/05-may-2-4x3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june1: file(relativePath: { eq: "construction/june-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june2: file(relativePath: { eq: "construction/june-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june3: file(relativePath: { eq: "construction/june-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june4: file(relativePath: { eq: "construction/june-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june5: file(relativePath: { eq: "construction/june-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june6: file(relativePath: { eq: "construction/june-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june7: file(relativePath: { eq: "construction/june-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june8: file(relativePath: { eq: "construction/june-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june9: file(relativePath: { eq: "construction/june-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june10: file(relativePath: { eq: "construction/june-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june11: file(relativePath: { eq: "construction/june-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june12: file(relativePath: { eq: "construction/june-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june13: file(relativePath: { eq: "construction/june-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    june14: file(relativePath: { eq: "construction/june-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep1: file(relativePath: { eq: "construction/september-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep2: file(relativePath: { eq: "construction/september-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep3: file(relativePath: { eq: "construction/september-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep4: file(relativePath: { eq: "construction/september-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep5: file(relativePath: { eq: "construction/september-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep6: file(relativePath: { eq: "construction/september-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep7: file(relativePath: { eq: "construction/september-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep8: file(relativePath: { eq: "construction/september-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sep9: file(relativePath: { eq: "construction/september-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct1: file(relativePath: { eq: "construction/october-2019-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct2: file(relativePath: { eq: "construction/october-2019-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct3: file(relativePath: { eq: "construction/october-2019-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct4: file(relativePath: { eq: "construction/october-2019-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct5: file(relativePath: { eq: "construction/october-2019-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct6: file(relativePath: { eq: "construction/october-2019-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct7: file(relativePath: { eq: "construction/october-2019-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct8: file(relativePath: { eq: "construction/october-2019-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct9: file(relativePath: { eq: "construction/october-2019-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct10: file(relativePath: { eq: "construction/october-2019-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct11: file(relativePath: { eq: "construction/october-2019-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct12: file(relativePath: { eq: "construction/october-2019-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct13: file(relativePath: { eq: "construction/october-2019-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct14: file(relativePath: { eq: "construction/october-2019-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct15: file(relativePath: { eq: "construction/october-2019-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct16: file(relativePath: { eq: "construction/october-2019-16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct17: file(relativePath: { eq: "construction/october-2019-17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct18: file(relativePath: { eq: "construction/october-2019-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oct19: file(relativePath: { eq: "construction/october-2019-19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Construction