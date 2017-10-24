import React, { Component } from 'react'
import AceEditor from 'react-ace'
import { defaults } from 'lodash'
import styled from 'styled-components'

const Wrapper = styled.div`
  .ace_gutter {
    background: #f9f9f9 !important;
  }

  .ace_gutter-active-line {
    background: transparent;
  }

  .ace_active-line {
    background: transparent;
  }
`

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = { mounted: false }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    return this.state.mounted ? <Wrapper><AceEditor
    mode="xml"
    theme="github"
    width="100%"
    height="auto"
    onLoad={(editor) => editor.selection.moveCursorToPosition({row: 0, column: 0})}
    focus
    {...this.props}
    setOptions={defaults({}, this.props.setOptions || {}, {
      enableEmmet: true,
      useSoftTabs: true,
      tabSize: 2,
    })}
     /></Wrapper> : <div style={{textAlign: 'center' }}>Loading editor...</div>
  }
}

export default Editor