import React from 'react'
import Nav from '@components/nav/index.js'

class Detail extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showPostTopic: false
      }
  }
  render () {
    return (
      <main>
        <Nav />
        
      </main>
    )
  }
}

export default Detail;