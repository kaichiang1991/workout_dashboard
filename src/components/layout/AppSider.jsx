import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import { CarTwoTone } from '@ant-design/icons'
import Logo from '../Logo'
import menuArr from '../data/menu'
import { Link, useRouteMatch } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const { Sider } = Layout

//#region AppSider
const StyledAppSiderContainer = styled(Sider)`
  font-size: 28px;
  color: #fff;
`

const AppSider = ({ collapsed, setCollapsed }) => {
  const { path } = useRouteMatch()

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
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['0']}>
        {menuArr.map(({ key, option, icon, path: link }) => {
          const linkPath = path === link ? path : path + link
          return (
            <Menu.Item key={key} icon={icon}>
              <Link to={linkPath}>{option}</Link>
            </Menu.Item>
          )
        })}
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
