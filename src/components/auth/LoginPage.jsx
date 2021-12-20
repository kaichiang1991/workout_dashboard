import React from 'react'
import styled from 'styled-components'
import { Layout, Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useSetRecoilState } from 'recoil'
import { loginState } from '../recoil'
import { useHistory } from 'react-router-dom'

const StyledLoginPageContainer = styled(Layout)`
  height: 100%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

const StyledForm = styled(Form)`
  border: 1px solid gray;
  padding: 40px;

  .submit-button {
    margin-right: 4px;
  }
`

const LoginPage = props => {
  const setLoginState = useSetRecoilState(loginState)
  const history = useHistory()

  const handleClickSubmit = ({ username, password, remember }) => {
    // ToDo 帳號密碼的檢查
    setLoginState({
      username,
      password,
    })
    history.push('/')
  }

  return (
    <StyledLoginPageContainer>
      <StyledForm
        initialValues={{ remember: true }}
        onFinish={handleClickSubmit}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: 'Please Input Username' }]}
        >
          <Input prefix={<UserOutlined />} placeholder='Username' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please Input Password' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a href=''>Forgot password</a>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='submit-button'>
            送出
          </Button>
          Or <a href=''>註冊</a>
        </Form.Item>
      </StyledForm>
    </StyledLoginPageContainer>
  )
}

LoginPage.propTypes = {}

export default LoginPage
