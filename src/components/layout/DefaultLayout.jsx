import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'antd'
import AppSider from './AppSider'
import AppHeader from './AppHeader'
const { Content, Footer } = Layout

const StyledDefaultLayoutContainer = styled(Layout)``

const DefaultLayout = props => {
  const [siderCollapsed, setSiderCollapsed] = useState(false)

  return (
    <StyledDefaultLayoutContainer>
      <AppSider collapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <Layout>
        <AppHeader
          collapsed={siderCollapsed}
          setCollapsed={setSiderCollapsed}
        />
        <Content children={'content'} />
        <Footer children={'footer'} />
      </Layout>
    </StyledDefaultLayoutContainer>
  )
}

DefaultLayout.propTypes = {}

export default DefaultLayout
