import React from 'react'
import { Breadcrumb } from 'antd'
import routes from '../router'
import { withRouter, Link } from 'react-router-dom'

class TheBreadCrumb extends React.Component {
  // 根据当前url，获取其相关路由，用于渲染面包屑组件
  getPath = (menuList, pathname) => {
    const temppath = []
    try {
      function getNodePath (node) {
        temppath.push(node)
        // 找到符合条件的节点，通过throw终止掉递归
        if (node.path === pathname) {
          throw new Error('GOT IT!')
        }
        // 动态路由的匹配
        if (node.path.includes(':')) {
          if (node.path.includes('/') && pathname.includes('/')) {
            const lastLocation = node.path.lastIndexOf('/')
            if (node.path.substring(0, lastLocation) === pathname.substring(0, lastLocation)) {
              node.dynamicName = pathname.substring(lastLocation + 1)
              throw new Error('GOT IT!')
            }
          }
        }
        if (node.children && node.children.length > 0) {
          for (let i = 0; i < node.children.length; i++) {
            getNodePath(node.children[i])
          }
        }
        temppath.pop()
      }
      for (let i = 0; i < menuList.length; i++) {
        getNodePath(menuList[i])
      }
    } catch (e) {
      return temppath
    }
  }

  render () {
    const { pathname } = this.props.location
    const path = this.getPath(routes, pathname)
    return (
      <>
        <Breadcrumb>
          {path &&
            path.length > 1 &&
            path.map((item) => (
              <Breadcrumb.Item key={ item.path }>
                <Link to={ item.path }>{item.dynamicName || item.zh_name}</Link>
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>
      </>
    )
  }
}

export default withRouter(TheBreadCrumb)
