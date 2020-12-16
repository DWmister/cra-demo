import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  componentDidMount () {
    document.title = '剑与远征官方网站-莉莉丝游戏'
  }

  render () {
    return (
      <>
        <div className="g-center g-title">
          this is home page.
        </div>
        <div className="g-center">
          <Link to="/part1">to part1 page</Link>
        </div>

      </>
    )
  }
}

export default Home
