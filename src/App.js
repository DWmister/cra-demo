import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import CLoading from '@/components/Loading'
import TheLayout from './layout/TheLayout'

function App () {
  return (
    <ConfigProvider locale={ zhCN }>
      <BrowserRouter>
        <React.Suspense fallback={ <CLoading /> }>
          <Switch>
            <Route path='/' name='Home' render={ props => <TheLayout { ...props } /> } />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
