import React, { Component } from 'react'
import AceEditor from 'react-ace'

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = { mounted: false }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    return this.state.mounted ? <AceEditor {...this.props} /> : <div />
  }
}

export default Editor
