import React from 'react'
import { Link } from 'react-router-dom'

class Result extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  componentDidMount () {
    document.title = 'Result'
  }

  render () {
    return (
      <>
        <div className="g-center g-title">
          this is Result page.<br />
          <Link to="/fodder/result/detail/fodder1">jump to fodder detail page</Link>
        </div>
      </>
    )
  }
}

export default Result
