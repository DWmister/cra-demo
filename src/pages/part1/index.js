import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Part1 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  componentDidMount () {
    document.title = 'part1part1'
  }

  // jump = () => {
  //   this.props.history.push('/')
  // }
  render () {
    return (
      <>
        <div className="g-center g-title">
          this is part1 page.
        </div>
        {/* <div className="g-center g-cursor" onClick={ () => this.props.history.push('/') }>back home</div> */}
        {/* <div className="g-center g-cursor" onClick={ this.jump }>back home</div> */}
        <div className="g-center">
          <Link to="/" replace>back home</Link>
        </div>
      </>
    )
  }
}

export default withRouter(Part1)
