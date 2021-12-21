import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { atom } from 'recoil'

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
