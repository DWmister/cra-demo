import React from 'react'
import './home.scss'

class Home extends React.Component {
  componentDidMount () {
    document.title = 'homehome'
  }

  render () {
    return (
      <>
        <div className='g-center g-title'>
          this is home page.
        </div>
      </>
    )
  }
}

export default Home
