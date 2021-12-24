import './App.css'
import 'antd/dist/antd.css'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './components/auth/LoginPage'

const App = props => {
  return (
    <Switch>
      <Route path='/login' component={LoginPage} />
      <Route path='/dashboard' component={MainPage} />
      <Redirect to='/dashboard' />
    </Switch>
  )
}

App.propTypes = {}

export default App
