/**
 * 打字机效果
 * title:  card组件的title
 * source: 展示的文本内容，html格式或者字符串
 * delay:  字符显示的间隔时间
 */

import React, { useRef, useEffect } from 'react'
import { Card } from 'antd'
import { PropTypes } from 'prop-types'
import Typing from '@/utils/typing'

const TypingCard = (props) => {
  const { title, source, delay } = props

  const sourceEl = useRef()
  const outputEl = useRef()

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: delay
    })
    typing.start()
  }, [])
  return (
    <Card bordered={ false } className='typingComponent' title={ title }>
      <div
        style={ { display: 'none' } }
        ref={ sourceEl }
        dangerouslySetInnerHTML={ { __html: source } }
      />
      <div ref={ outputEl } />
    </Card>
  )
}

TypingCard.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string
}

TypingCard.defaultProps = {
  title: '',
  source: ''
}

export default TypingCard
