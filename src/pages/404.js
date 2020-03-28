import React from 'react'
import SEO from '../components/SEO'

import AlmaHeader from '../components/Header'
import Content from '../components/Content'
import CenteredContainer from '../components/layout/CenteredContainer'

const NotFoundPage = () => (
  <Content>
    <SEO title="404" />
    <CenteredContainer>
      <AlmaHeader title='Uh Oh' />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </CenteredContainer>
  </Content>
)

export default NotFoundPage
