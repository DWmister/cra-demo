import React from 'react'
import { Layout } from 'antd'
import TheHeader from './TheHeader'
import TheBreadCrumb from './TheBreadCrumb'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import routes from '../router'
import './layout.scss'

const { Content, Footer } = Layout

class TheLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flattenRoutes: this.flattenRoutes(routes)
    }
  }

  // 拉平路由，用于content渲染
  flattenRoutes = (data) => {
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

  render () {
    return (
      <Layout className="layout">
        <TheHeader {...this.props}></TheHeader>
        <Content className="theContent">
          <TheBreadCrumb></TheBreadCrumb>
          <div className="site-layout-content">
            <Switch>
              {this.state.flattenRoutes.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                )
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default TheLayout
