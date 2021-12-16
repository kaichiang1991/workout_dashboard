import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import styled from 'styled-components'
import { CarTwoTone } from '@ant-design/icons'
import Logo from '../Logo'
const { Sider } = Layout

const StyledAppSiderContainer = styled(Sider)``

const AppSider = props => {
  const [isCollapse, setIsCollapse] = useState(false)

  const handleCollapse = flag => {
    setIsCollapse(flag)
  }

  return (
    <StyledAppSiderContainer
      breakpoint='md'
      collapsedWidth={76}
      onCollapse={handleCollapse}
    >
      <Logo logo='Title' collapse={isCollapse} icon={<CarTwoTone />} />
    </StyledAppSiderContainer>
  )
}

AppSider.propTypes = {}

export default AppSider
