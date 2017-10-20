import React, { Component } from 'react'

class Redirect extends Component {
  componentDidMount() {
    window.location = this.props.to
  }

  render() {
    return <div>Redirecting...</div>
  }
}

export default Redirect
