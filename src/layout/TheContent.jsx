import React from 'react'
import { Layout } from 'antd'
import CLoading from '@/components/Loading'
import {
  Redirect,
  Route
} from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import routes from '../router'

const { Content } = Layout

// 拉平路由，用于content渲染
const flattenRoutes = (data) => {
  const result = []
  const cb = (data) => {
    return data.reduce((pre, curr) => {
      if (curr.children) {
        cb(curr.children)
      }
      result.push(curr)
      return pre
    }, [])
  }
  cb(data)
  return result
}

function TheContent (props) {
  const contentRoutes = flattenRoutes(routes)

  return (
    <Content className='theContent'>
      {props.children}
      <div className='site-layout-content'>
        <React.Suspense fallback={ <CLoading /> }>
          {/* 使用 react-router-cache-route 插件实现路由的缓存以及滚动条的记忆 */}
          <CacheSwitch>
            {contentRoutes.map((route, idx) => {
              return route.component && (
                route.cache
                  ? <CacheRoute
                    key={ idx }
                    path={ route.path }
                    exact={ route.exact }
                    name={ route.name }
                    saveScrollPosition
                    render={ props => (
                      <route.component { ...props } />
                    ) }
                  />
                  : <Route
                    key={ idx }
                    path={ route.path }
                    exact={ route.exact }
                    name={ route.name }
                    render={ props => (
                      <route.component { ...props } />
                    ) }
                  />
              )
            })}
            <Redirect from='/' to='/fodder' />
          </CacheSwitch>
        </React.Suspense>
      </div>
    </Content>
  )
}

export default TheContent
