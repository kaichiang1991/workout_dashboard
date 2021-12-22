import React from 'react'
import PropTypes from 'prop-types'
import DefaultLayout from '../components/layout/DefaultLayout'
import { PageHeader } from 'antd'
import { Switch, Link, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentBreadcrumRoutes } from '../components/recoil'
import Dashboard from './Dashboard'
import UserPage from './UserPage'
import ChartPage from './ChartPage'

const MainPage = props => {
  const routes = useRecoilValue(currentBreadcrumRoutes)

  const itemRender = (route, params, routers, paths) => {
    const last = routers.indexOf(route) === routers.length - 1
    const { icon, breadcrumbName, title } = route

    // breadcrum 標題的顯示
    const TitleComponent = () => {
      return (
        <>
          {icon}
          <span style={{ marginLeft: 4 }}>{title || breadcrumbName}</span>
        </>
      )
    }

    return last ? (
      <span>{<TitleComponent />}</span>
    ) : (
      <Link to={paths.join('/')}>{<TitleComponent />}</Link>
    )
  }

  return (
    <DefaultLayout>
      <PageHeader breadcrumb={{ itemRender, routes }} />
      <Switch>
        <Route exact path='/home' component={Dashboard} />
        <Route path='/home/user' component={UserPage} />
        <Route path='/home/charts' component={ChartPage} />
      </Switch>
    </DefaultLayout>
  )
}

MainPage.propTypes = {}

export default MainPage
