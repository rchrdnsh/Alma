import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import SEO from '../components/SEO'

import Content from '../components/Content'
import Box from '../components/Box'
import { Image } from '../components/Image'
import { HeadingContainer } from '../components/layout/FullContentCard'
import Arrow from '../components/Arrow'
import AlmaHeader from '../components/Header'
// import { Button } from '../components/Button'
import { H1, P } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'

// const VideoBox = styled.div`
//   position: relative;
// 	padding-bottom: 52.75%;
// 	padding-top: 25px;
// 	height: 0;

//   > iframe {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `

const News = ({ data }) => {

  const intl = useIntl()
  const t = intl.formatMessage

  return (
    <Content space={'2'}>

      <SEO title={t({ id: 'news-title' })} />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title={t({ id: 'news-title' })}/>
        </HeadingContainer>
        <Image grid fluid={data.oct19.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <AlmaHeader center blue title={t({ id: 'march-title' })}/>

      <P center>{t({ id: 'march-intro-paragraph' })}</P>

      <H1 center>{t({ id: 'march-heading-1' })}</H1>
      <P center>{t({ id: 'march-paragraph-1' })}</P>

      <H1 center>{t({ id: 'march-heading-2' })}</H1>
      <P center>{t({ id: 'march-paragraph-2' })}</P>

      <H1 center>{t({ id: 'march-heading-3' })}</H1>
      <P center>{t({ id: 'march-paragraph-3' })}</P>

      <H1 center>{t({ id: 'march-heading-4' })}</H1>
      <P center>{t({ id: 'march-paragraph-4' })}</P>

      <AlmaHeader center blue title={t({ id: 'february-title' })}/>

      <P center>{t({ id: 'february-paragraph-1' })}</P>
      <P center>{t({ id: 'february-paragraph-2' })}</P>
      <P center>{t({ id: 'february-paragraph-3' })}</P>
      <P center>{t({ id: 'february-paragraph-4' })}</P>
      <P center>{t({ id: 'february-paragraph-5' })}</P>
      
      <AlmaHeader center blue title={t({ id: 'january-title' })}/>

      <P center>{t({ id: 'january-paragraph-1' })}</P>
      <P center>{t({ id: 'january-paragraph-2' })}</P>
      <P center>{t({ id: 'january-paragraph-3' })}</P>
      <P center>{t({ id: 'january-paragraph-4' })}</P>

      <AlmaHeader center blue title={t({ id: 'december-title' })}/>

      <P center>{t({ id: 'december-paragraph-1' })}</P>
      <P center>{t({ id: 'december-paragraph-2' })}</P>
      <P center>{t({ id: 'december-paragraph-3' })}</P>
        
      {/* <CenteredContainer>
        <Space/>
        <P>{t({ id: 'construction-to-vacations' })}</P>
        <Space/>
        <ButtonContainer>
          <Link to='/vacations'>
            <Button>{t({ id: 'vacations-title' })}</Button>
          </Link> 
        </ButtonContainer>
        <Space/>
        <Space/>
      </CenteredContainer> */}

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    oct19: file(relativePath: { eq: "construction/october-2019-19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default News