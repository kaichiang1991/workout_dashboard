import './App.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './components/auth/LoginPage'

const App = props => {
  return (
    <Switch>
      <Route path='/login' component={LoginPage} />
      <Route exact path='/' component={MainPage} />
      <Redirect to='/' />
    </Switch>
  )
}

App.propTypes = {}

export default App
