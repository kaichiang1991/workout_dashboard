import {
  AreaChartOutlined,
  DashboardOutlined,
  UserOutlined,
} from '@ant-design/icons'

const arr = [
  {
    key: '0',
    option: 'Dashboard',
    icon: <DashboardOutlined />,
    path: '/dashboard',
  },
  { key: '1', option: 'User', icon: <UserOutlined />, path: '/user' },
  { key: '2', option: 'Charts', icon: <AreaChartOutlined />, path: '/charts' },
]
export default arr
