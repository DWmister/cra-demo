import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ConfigProvider, Spin } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
// import TheLayout from './layout/TheLayout'

/**
 * React.lazy 处理动态引入组件。
 * 在 Suspense 组件中渲染 lazy 组件，使得可以在等待加载时，添加loading
 */
const TheLayout = React.lazy(() => import('./layout/TheLayout'))
const loading = <Spin />

function App () {
  return (
    <ConfigProvider locale={ zhCN }>
      <HashRouter>
        <React.Suspense fallback={ loading }>
          <Switch>
            <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </ConfigProvider>
  )
}

export default App
