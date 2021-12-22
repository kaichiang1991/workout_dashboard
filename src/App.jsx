import './App.css'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './components/auth/LoginPage'

const App = props => {
  return (
    <Switch>
      <Route path='/login' component={LoginPage} />
      <Route path='/home' component={MainPage} />
      <Redirect to='/home' />
    </Switch>
  )
}

App.propTypes = {}

export default App
