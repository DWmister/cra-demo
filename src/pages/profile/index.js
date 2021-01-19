import React from 'react'

class Profile extends React.Component {
  componentDidMount () {
    document.title = 'Profile'
  }

  render () {
    return (
      <>
        <div className="g-center g-title">
          this is profile page.
        </div>
      </>
    )
  }
}

export default Profile
