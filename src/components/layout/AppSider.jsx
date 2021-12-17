import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import styled from 'styled-components'
import {
  CarTwoTone,
  LeftSquareOutlined,
  RightSquareOutlined,
} from '@ant-design/icons'
import Logo from '../Logo'
const { Sider } = Layout

//#region CollapsedArrow
const StyledCollapsedArrowContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const CollapsedArrow = ({ collapse, clickEvent }) => {
  return (
    <StyledCollapsedArrowContainer onClick={clickEvent}>
      {collapse ? <RightSquareOutlined /> : <LeftSquareOutlined />}
    </StyledCollapsedArrowContainer>
  )
}

CollapsedArrow.propTypes = {
  collapse: PropTypes.bool,
  clickEvent: PropTypes.func,
}
//#endregion CollapsedArrow

//#region AppSider
const StyledAppSiderContainer = styled(Sider)`
  font-size: 28px;
  color: #fff;
`

const AppSider = () => {
  const [isCollapse, setIsCollapse] = useState(false)

  return (
    <StyledAppSiderContainer
      breakpoint='md'
      collapsedWidth={76}
      collapsible
      trigger={null}
      collapsed={isCollapse}
      onBreakpoint={broken => setIsCollapse(broken)}
    >
      <Logo logo='Title' collapse={isCollapse} icon={<CarTwoTone />} />
      <CollapsedArrow
        collapse={isCollapse}
        clickEvent={() => setIsCollapse(!isCollapse)}
      />
    </StyledAppSiderContainer>
  )
}

AppSider.propTypes = {}
//#endregion AppSider

export default AppSider
