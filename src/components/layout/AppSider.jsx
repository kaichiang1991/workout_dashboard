import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import { CarTwoTone } from '@ant-design/icons'
import Logo from '../Logo'
import menuArr from '../data/menu'
const { Sider } = Layout

//#region AppSider
const StyledAppSiderContainer = styled(Sider)`
  font-size: 28px;
  color: #fff;
`

const AppSider = ({ collapsed, setCollapsed }) => {
  return (
    <StyledAppSiderContainer
      breakpoint='md'
      collapsedWidth={76}
      collapsible
      trigger={null}
      collapsed={collapsed}
      onBreakpoint={broken => setCollapsed(broken)}
    >
      <Logo logo='Title' collapse={collapsed} icon={<CarTwoTone />} />
      <Menu theme='dark' mode='inline'>
        {menuArr.map(({ key, option, icon }) => (
          <Menu.Item key={key} icon={icon}>
            {option}
          </Menu.Item>
        ))}
      </Menu>
    </StyledAppSiderContainer>
  )
}

AppSider.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func.isRequired,
}
//#endregion AppSider

export default AppSider
