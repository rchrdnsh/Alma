import React from 'react'
import styled from 'styled-components'
import { Link, injectIntl } from 'gatsby-plugin-intl'
import Content from '../components/Content'
import { H1, P } from '../components/Typography'
import { Button } from '../components/Button'

const Box = styled.div`
  grid-column: 1/ 4;
  grid-row: 1 / 4;
  width: 100vw;
  height: 90vh;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  @media (orientation: landscape) {
    width: 80vw;
    height: 100vh;
    padding: 8rem;
  }
`

const CenterP = styled(P)`
  max-width: 60ch;
`

const Disclaimer = styled.p`
  font-size: 9px;
  line-height: 1.25;
  margin: 0;
  padding: 2rem 3rem;
  font-family: 'Open Sans', sans-serif;
  max-width: 30rem;
`

const Success = ({ data, intl }) => {
  return(
    <Content>
      <Box>
        <H1>Yay!</H1> 
        <CenterP>
        {intl.formatMessage({ id: "promo-submission-success" })}
        </CenterP>
        <Link to={`/`}>
          <Button>Home</Button>
        </Link>
        <Disclaimer>{intl.formatMessage({ id: "promo-disclaimer" })}</Disclaimer>
      </Box>
    </Content>
  )
}

export default injectIntl(Success)