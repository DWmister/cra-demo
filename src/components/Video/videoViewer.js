import React from 'react'
import './videoViewer.scss'

class CVideoViewer extends React.Component {
  videoNode = React.createRef()
  handleClose = () => {
    this.videoNode.current.pause()
    this.props.onClose()
  }

  render () {
    const { visible, src } = this.props
    return (
      <div style={ { display: visible ? 'block' : 'none' } } className='c-videoViewer'>
        <div className='dark-bg' />
        <div className='close-btn' onClick={ this.handleClose }>
          <b>X</b>
        </div>
        <div className='video-content'>
          {src &&
            <video src={ src } controls ref={ this.videoNode } />}
        </div>
      </div>
    )
  }
}

export default CVideoViewer
