// import React from 'react'
import { Spin } from 'antd'

const CLoading = () => {
  return (
    <div style={ {
      margin: '0 auto',
      marginBottom: '20px',
      padding: '30px 50px',
      textAlign: 'center'
    } }
    >
      <Spin delay={ 300 } />
    </div>
  )
}

export default CLoading
