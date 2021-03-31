import { useEffect } from 'react'
import { Empty } from 'antd'

export default function Detail (props) {
  useEffect(() => {
    const fodderName = props.match.params.fodderName
    document.title = `中台模版 - ${fodderName}`
  }, [])

  return (
    <div className='detailPage'>
      <div className='g-center g-title'>
        <Empty />
      </div>
    </div>
  )
}
