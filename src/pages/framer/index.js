import React from 'react'
import { Empty } from 'antd'
import './framer.scss'

class Framer extends React.Component {
  componentDidMount () {
    document.title = '中台模版 - 创作者'
  }

  render () {
    return (
      <div className='framerPage'>
        <div className='g-center g-title'>
          {/* 创作者页面 */}
          {/* <Empty /> */}
          <Empty image={ Empty.PRESENTED_IMAGE_SIMPLE } />
        </div>
      </div>
    )
  }
}

export default Framer
