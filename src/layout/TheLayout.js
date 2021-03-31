import { useState } from 'react'
import { Layout, BackTop } from 'antd'
import TheHeader from './TheHeader'
import TheContent from './TheContent'
import TheFooter from './TheFooter'
import TheBreadCrumb from './TheBreadCrumb'
import './layout.scss'

function TheLayout (props) {
  const [footer, setFooter] = useState(true)
  const [darkClass, setDarkClass] = useState('hideDark g-hidden g-darkBg')

  function hideFooter () {
    setFooter(true)
    setDarkClass('hideDark g-hidden g-darkBg')
  }
  function showFooter () {
    setFooter(false)
    setDarkClass('showDark g-darkBg')
  }

  return (
    <Layout className='layout'>
      <TheHeader { ...props } />

      {/* content区域 组合组件 */}
      <TheContent { ...props }>
        {/* 面包屑 */}
        <TheBreadCrumb />
      </TheContent>

      {/* 回到顶部 */}
      <BackTop>
        <span>回到顶部</span>
      </BackTop>

      {/* 底部内容 + 全屏黑幕 */}
      {/* hide属性控制子组件的显隐 */}
      <TheFooter hide={ footer } hideFooter={ hideFooter } />
      {/* 全屏黑幕 */}
      <div className={ darkClass } />
      {/* 底部版权 */}
      <div className='cp-btn' onClick={ showFooter }>
        xxx底部footer
      </div>

    </Layout>
  )
}

export default TheLayout
