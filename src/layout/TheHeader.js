import React from 'react'
import { Layout, Menu, Avatar, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import routes from '../router'
import avatarImg from '@/assets/img/avatar.jpg'

class TheHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuTreeNode: this.getMenuNodes(JSON.parse(JSON.stringify(routes)))
    }
  }

  /**
   * 菜单栏过滤
   * 不显示 hidden: true项
   */
  filterMenuItem = (data) => {
    return data.filter(item => {
      return !item.hidden
    }).map(item => {
      if (item.children) {
        item.children = this.filterMenuItem(item.children)
      }
      return item
    })
  }

  // 菜单渲染
  getMenuNodes = (menuList) => {
    const filterRoutes = this.filterMenuItem(menuList)
    return filterRoutes.reduce((pre, item) => {
      if (item.children && item.children.length) {
        pre.push(
          <Menu.SubMenu
            key={ item.path }
            title={ <span>
              <span>{item.zh_name}</span>
            </span> }
          >
            {this.getMenuNodes(item.children)}
          </Menu.SubMenu>
        )
      } else {
        pre.push(
          <Menu.Item key={ item.path }>
            <Link to={ item.path }>
              <span>{item.zh_name}</span>
            </Link>
          </Menu.Item>
        )
      }
      return pre
    }, [])
  };

  logout () {
    console.log('lagout')
  }

  render () {
    const selectedKeys = []
    selectedKeys.push(this.props.location.pathname)

    const dropDownMenu = (
      <Menu>
        <Menu.Item key='/profile'>
          <Link to='/profile'>个人中心</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key='logout'
          onClick={ this.logout }
        >注销
        </Menu.Item>
      </Menu>
    )

    return (
      <Layout.Header className='theHeader'>
        <div className='logo'>
          <Avatar src={ avatarImg } />
          <b>中台系统模版</b>
        </div>
        <div className='theMenu'>
          {this.state.menuTreeNode.map(item => (
            <Menu
              key={ item.key }
              mode='horizontal'
              selectedKeys={ selectedKeys }
            >
              {item}
            </Menu>
          ))}
        </div>
        <div className='rightPane'>
          <Dropdown overlay={ dropDownMenu } placement='bottomCenter'>
            <div>
              <Avatar src={ avatarImg } />
            </div>
          </Dropdown>
        </div>
      </Layout.Header>
    )
  }
}

export default TheHeader
