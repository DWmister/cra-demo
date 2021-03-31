import React from 'react'

class Part1 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  componentDidMount () {
    document.title = 'part1part1'
  }

  render () {
    return (
      <>
        <div className='g-center g-title'>
          this is part1 page.
        </div>
      </>
    )
  }
}

export default Part1
