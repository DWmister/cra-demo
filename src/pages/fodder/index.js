import React from 'react'
import { Table, Drawer } from 'antd'
import IconSymbol from '@/components/Icon'
import './index.scss'

class Fodder extends React.Component {
  state = {
    visible: false
  }

  componentDidMount () {
    document.title = '中台模版 - 搜索页'
  }

  // 编辑
  toEdit = text => {
    this.setState({
      visible: true
    })
  }

  // 详情页
  toInfo = text => {
    this.props.history.push({
      pathname: `/fodder/detail/${text.key}`,
      params: text
    })
  }

  render () {
    const columns = [
      {
        title: 'Full Name',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        align: 'center'
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        align: 'center'
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        align: 'center'
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        align: 'center'
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        align: 'center'
      },
      {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        align: 'center'
      },
      {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        align: 'center'
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 150,
        render: text => {
          return (
            <div className='operate'>
              <span className='operate-edit' onClick={ () => this.toEdit(text) }>
                <IconSymbol icon='icon-edit' />
              </span>
              <span className='operate-info' onClick={ () => this.toInfo(text) }>
                <IconSymbol icon='icon-info' />
              </span>
            </div>
          )
        },
        align: 'center'
      }
    ]
    const data = []
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Game ${i}`,
        age: 20,
        address: `Linguist no. ${i}`
      })
    }
    const { visible } = this.state
    return (
      <div className='fodderPage'>
        <Table
          columns={ columns }
          dataSource={ data }
          scroll={ { x: 1500 } }
          sticky
        />

        <Drawer
          title='Basic Drawer'
          placement='right'
          closable={ false }
          onClose={ _ => this.setState({
            visible: false
          }) }
          visible={ visible }
          zIndex={ 1100 }
          maskClosable
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    )
  }
}

export default Fodder
