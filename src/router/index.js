// 引入路由视图组件
import Home from '../pages/home'
import Fodder from '../pages/fodder'
import Result from '../pages/fodder/result'
import Detail from '../pages/fodder/detail'
import Part1 from '../pages/part1'
import Profile from '../pages/profile'

/**
 * 路由配置
 * path       路径
 * exact      是否精确匹配
 * name       路径名称
 * hidden     是否在菜单栏显示  默认:false 显示
 */
const routes = [
  {
    path: '/',
    exact: true,
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    zh_name: '主页',
    component: Home
  },
  {
    path: '/fodder',
    exact: true,
    name: 'Fodder',
    zh_name: '素材库',
    component: Fodder,
    children: [
      {
        path: '/fodder/result',
        name: 'Result',
        zh_name: '结果',
        component: Result,
        hidden: true,
        children: [
          {
            path: '/fodder/result/detail/:fodderId',
            name: 'Detail',
            zh_name: '详情',
            component: Detail
          }
        ]
      }
    ]
  },
  {
    path: '/part1',
    name: 'Part1',
    zh_name: '我的素材',
    component: Part1
  },
  {
    path: '/profile',
    name: 'Profile',
    zh_name: '个人中心',
    component: Profile,
    hidden: true
  }
]
// 抛出路由配置表
export default routes
