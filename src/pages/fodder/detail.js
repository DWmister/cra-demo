import React from 'react'

class Detail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fodderId: ''
    }
  }

  componentDidMount () {
    const fodderId = this.props.match.params.fodderId
    this.setState({
      fodderId: fodderId
    })
    document.title = `Detail ${fodderId}`
  }

  render () {
    return (
      <>
        <div className="g-center g-title">
          this is Detail { this.state.fodderId } page.
        </div>
      </>
    )
  }
}

export default Detail
