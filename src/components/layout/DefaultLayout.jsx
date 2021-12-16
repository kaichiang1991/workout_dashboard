import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'antd'
import AppSider from './AppSider'
const { Header, Content, Footer } = Layout

const StyledDefaultLayoutContainer = styled(Layout)``

const DefaultLayout = props => {
  return (
    <StyledDefaultLayoutContainer>
      <AppSider />
      <Layout>
        <Header children={'header'} />
        <Content children={'content'} />
        <Footer children={'footer'} />
      </Layout>
    </StyledDefaultLayoutContainer>
  )
}

DefaultLayout.propTypes = {}

export default DefaultLayout
