import React from 'react'
import PropTypes from 'prop-types'
import DefaultLayout from '../components/layout/DefaultLayout'
import { PageHeader } from 'antd'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { breadcrumRoutes } from '../components/recoil'

const MainPage = props => {
  const routes = useRecoilValue(breadcrumRoutes)

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
      <PageHeader breadcrumb={{ itemRender, routes }} title='Title' />
    </DefaultLayout>
  )
}

MainPage.propTypes = {}

export default MainPage
