import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'antd'
import AppSider from './AppSider'
import AppHeader from './AppHeader'
const { Content } = Layout

const StyledDefaultLayoutContainer = styled(Layout)``

const DefaultLayout = ({ children }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(false)

  return (
    <StyledDefaultLayoutContainer>
      <AppSider collapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <Layout>
        <AppHeader
          collapsed={siderCollapsed}
          setCollapsed={setSiderCollapsed}
        />
        <Content children={children} />
      </Layout>
    </StyledDefaultLayoutContainer>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}

export default DefaultLayout
