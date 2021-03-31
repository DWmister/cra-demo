import { lazy } from 'react'

// 懒加载引入路由视图组件(延迟加载在初次渲染时未使用到的组件)
const Fodder = lazy(() => import('@/pages/fodder'))
const Detail = lazy(() => import('@/pages/fodder/detail'))
const About = lazy(() => import('@/pages/about'))
const Framer = lazy(() => import('@/pages/framer'))
const Profile = lazy(() => import('@/pages/profile'))

/**
 * 路由配置
 * path       路径
 * exact      是否精确匹配
 * name       路径名称
 * hidden     是否在菜单栏显示  默认:false 显示
 * cache      是否需要缓存     默认:false 不需要
 */
const routes = [
  {
    path: '/',
    exact: true,
    hidden: true
  },
  {
    path: '/fodder',
    exact: true,
    name: 'Fodder',
    zh_name: '搜索',
    component: Fodder,
    cache: true,
    children: [
      {
        hidden: true,
        path: '/fodder/detail/:fodderName',
        name: 'Detail',
        zh_name: '详情',
        component: Detail
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    zh_name: '我的素材',
    component: About
  },
  {
    path: '/framer',
    name: 'Framer',
    zh_name: '创作者',
    exact: true,
    component: Framer
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
