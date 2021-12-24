import { atom, selector } from 'recoil'
import menuArr from '../data/menu'

// 登入的狀態
export const loginState = atom({
  key: 'loginState',
  default: {
    username: '小明',
  },
})

// 麵包屑的路由顯示狀態
export const breadcrumbRoutes = atom({
  key: 'breadcrumbRoutes',
  default: menuArr
    // 新增 breadcurmName 屬性，讓麵包屑顯示
    .map(menu => ({ ...menu, breadcrumbName: menu.option }))
    // dashboard 的路徑調整為 / ，避免出現 /dashboard/dashboard
    .map(menu => (menu.path === '/dashboard' ? { ...menu, path: '/' } : menu)),
})
