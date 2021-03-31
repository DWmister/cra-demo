/**
 * 一键复制
 */

import React from 'react'
import { message } from 'antd'
import './style.scss'

class CCopyLink extends React.Component {
  handleCopy = () => {
    const createInput = document.createElement('input')
    createInput.value = this.props.text
    document.body.appendChild(createInput)
    createInput.select() // 选择对象
    document.execCommand('Copy')// 执行浏览器复制命令
    createInput.className = 'createInput'
    createInput.style.display = 'none'
    message.success('复制成功！', 1.5)
    // navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
    //   if (result.state === 'granted' || result.state === 'prompt') {
    //     navigator.clipboard.writeText(this.props.text)
    //     message.success('复制成功！', 1.5)
    //   } else {
    //     message.error('尴尬，复制失败！', 1.5)
    //   }
    // })
  }

  render () {
    const { text } = this.props
    return (
      <div className='c-copyLink'>
        <a href={ text } target='_blank' rel='noreferrer'>
          {text}
        </a>
        <span
          className='copy'
          onClick={ this.handleCopy }
        >一键复制
        </span>
      </div>
    )
  }
}

export default CCopyLink
