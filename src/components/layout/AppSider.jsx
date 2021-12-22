import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import { CarTwoTone } from '@ant-design/icons'
import Logo from '../Logo'
import menuArr from '../data/menu'
import { Link, useRouteMatch } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { breadcrumArr } from '../recoil'
const { Sider } = Layout

//#region AppSider
const StyledAppSiderContainer = styled(Sider)`
  font-size: 28px;
  color: #fff;
`

const AppSider = ({ collapsed, setCollapsed }) => {
  const { path } = useRouteMatch()
  const setArr = useSetRecoilState(breadcrumArr)

  const handleClickMenuItem = ({ item, key, keyPath, domEvent }) => {
    const menu = menuArr.find(menu => menu.key === key)
    setArr(['home', menu.path])
  }

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
        {menuArr.map(({ key, option, icon, path: link }) => (
          <Menu.Item key={key} icon={icon} onClick={handleClickMenuItem}>
            <Link to={[path, link].join('/')}>{option}</Link>
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
