/**
 * 使用外部的iconfont图标
 * 在我的项目 resourcePlatfrom 中导出在线链接(Symbol)
 * 每次更新icon时都需要更新链接
 */
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2455307_9qysd213igc.js'
})

export default function IconSymbol (props) {
  return (
    <IconFont type={ props.icon } />
  )
}
