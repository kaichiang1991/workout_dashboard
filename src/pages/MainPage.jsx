import React from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import { PageHeader } from 'antd'
import { Switch, Link, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { breadcrumbRoutes, currentBreadcrumbRoutes } from '../components/recoil'
import Dashboard from './Dashboard'
import UserPage from './UserPage'
import ChartPage from './ChartPage'
import { useLocation } from 'react-router-dom'

const useBreadcrumRoute = () => {
  const { pathname } = useLocation()
  const nameArr = pathname.split('/').filter(name => name !== '')
  const origRoutes = useRecoilValue(breadcrumbRoutes)
  const currentRoutes = origRoutes.filter(
    route => nameArr.includes(route.path.split('/')[1]) || route.path === '/'
  )
  return currentRoutes
}

const MainPage = props => {
  const routes = useBreadcrumRoute()

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
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/dashboard/user' component={UserPage} />
        <Route path='/dashboard/charts' component={ChartPage} />
      </Switch>
    </DefaultLayout>
  )
}

MainPage.propTypes = {}

export default MainPage
