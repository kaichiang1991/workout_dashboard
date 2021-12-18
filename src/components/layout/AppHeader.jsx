import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'antd'
import { useRecoilState } from 'recoil'
import { loginState } from '../recoil'
import { useHistory } from 'react-router-dom'
const { Header } = Layout

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
    if (!login.account) {
      history.push('/login')
    }
  }, [history, login])

  return (
    <StyledLoginContainer>
      <span>歡迎回來, {login.account}</span>
      <span onClick={() => setLoginState({})}>登出</span>
    </StyledLoginContainer>
  )
}
//#endregion Login

//#region AppHeader
const StyledAppHeaderContainer = styled(Header)`
  color: #fff;
  text-align: right;
`

const AppHeader = props => {
  return (
    <StyledAppHeaderContainer>
      <Login />
    </StyledAppHeaderContainer>
  )
}

AppHeader.propTypes = {}
//#endregion AppHeader
export default AppHeader
