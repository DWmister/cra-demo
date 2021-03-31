import { useEffect, useState } from 'react'
import { Button, Divider } from 'antd'
import Viewer from 'react-viewer'
import TypingCard from '@/components/Typing'
import CVideoViewer from '@/components/Video/videoViewer'
import banner1 from '@/assets/img/viewer/banner1.jpg'
import banner2 from '@/assets/img/viewer/banner2.jpg'
import banner3 from '@/assets/img/viewer/banner3.jpg'
import banner4 from '@/assets/img/viewer/banner4.jpg'
import banner5 from '@/assets/img/viewer/banner5.jpg'

export default function About (props) {
  useEffect(() => {
    document.title = '中台模版 - 我的素材'
  }, [])
  const [visible, setVisible] = useState(false)
  const [video, setVideo] = useState(false)
  const imgList = [
    {
      src: banner1
    },
    {
      src: banner2
    },
    {
      src: banner3
    },
    {
      src: banner4
    },
    {
      src: banner5
    }
  ]
  const content = `
    <p>点击预览图片即可看到效果</p>
  `

  return (
    <div className='aboutPage'>
      <TypingCard source={ content } title='react-viewer' />
      <Button onClick={ _ => setVisible(true) }>预览图片</Button>
      <Viewer
        visible={ visible }
        onClose={ () => { setVisible(false) } }
        images={ imgList }
      />

      <Divider>video</Divider>
      <Button onClick={ _ => setVideo(true) }>视频组件</Button>
      <CVideoViewer
        visible={ video }
        src='https://www.w3schools.com/html/movie.mp4'
        onClose={ _ => setVideo(false) }
      />
    </div>
  )
}
