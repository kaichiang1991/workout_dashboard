import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { atom, selector } from 'recoil'

// 登入的狀態
export const loginState = atom({
  key: 'loginState',
  default: {
    account: '小明',
  },
})

// 麵包屑的路由顯示狀態
export const breadcrumRoutes = atom({
  key: 'breadcrumRoutes',
  default: [
    {
      path: '/',
      breadcrumbName: 'home',
      icon: <HomeOutlined />,
    },
    {
      path: 'user',
      breadcrumbName: 'user',
      icon: <UserOutlined />,
      title: 'User',
    },
  ],
})

export const breadcrumArr = atom({
  key: 'breadcrumArr',
  default: ['home'],
})

export const currentBreadcrumRoutes = selector({
  key: 'currentBreadcrumRoutes',
  get: ({ get }) => {
    // 根據 breadcrumArr 去判斷現在的 route 有哪些
    const routes = get(breadcrumRoutes)
    const arr = get(breadcrumArr)
    const resultRoutes = routes.filter(route =>
      arr.includes(route.breadcrumbName)
    )
    return resultRoutes
  },
})
