import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'antd'
import { useRecoilState } from 'recoil'
import { loginState } from '../recoil'
import { useHistory } from 'react-router-dom'
import { LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
const { Header } = Layout

//#region CollapsedArrow
const StyledCollapsedArrowContainer = styled.div`
  font-size: 28px;
  cursor: pointer;

  span:hover {
    color: #ccc;
  }
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

//#region Login
const StyledLoginContainer = styled.div`
  span {
    padding: 0 8px;
  }

  span:last-child {
    padding-left: 8px;
    border-left: 1px solid #fff;
    cursor: pointer;

    :hover {
      color: #ccc;
    }
  }
`

// 登陸的歡迎畫面
const Login = () => {
  const [login, setLoginState] = useRecoilState(loginState)

  const history = useHistory()
  useEffect(() => {
    if (!login.username) {
      history.push('/login')
    }
  }, [history, login])

  return (
    <StyledLoginContainer>
      <span>歡迎回來, {login.username}</span>
      <span onClick={() => setLoginState({})}>登出</span>
    </StyledLoginContainer>
  )
}
//#endregion Login

//#region AppHeader
const StyledAppHeaderContainer = styled(Header)`
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`

const AppHeader = ({ collapsed, setCollapsed }) => {
  return (
    <StyledAppHeaderContainer>
      <CollapsedArrow
        collapse={collapsed}
        clickEvent={() => setCollapsed(!collapsed)}
      />
      <Login />
    </StyledAppHeaderContainer>
  )
}

AppHeader.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func.isRequired,
}
//#endregion AppHeader
export default AppHeader
