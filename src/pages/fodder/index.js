import React from 'react'
import { withRouter, Link } from 'react-router-dom'

class Fodder extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  componentDidMount () {
    document.title = 'Fodder'
  }

  render () {
    return (
      <>
        <div className="g-center g-title">
          this is Fodder page.
          <br />
          <Link to="/fodder/result">jump to fodder result page</Link>
        </div>
      </>
    )
  }
}

export default withRouter(Fodder)
