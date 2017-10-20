import React, { Component } from 'react'
import Helmet from 'react-helmet'
import SplitPane from 'react-split-pane'
import axios from 'axios'
import Header from '../components/Header'
import Editor from '../components/Editor'
import { editor as styles } from '../styles'

import HEML from  '../../../heml/packages/heml'

// let timeout
// const HEML = (heml, options) => {
//   let lastHeml = heml
//   clearTimeout(timeout)

//   return new Promise((resolve, reject) => {
//     timeout = setTimeout(() => {
//       return axios
//         .post('http://localhost:3000/api/v1/render', {
//           heml: lastHeml,
//           options,
//         })
//         .then(({ data }) => data)
//         .then(resolve)
//         .catch(reject)
//     }, 450)
//   })
// }

const defaultHEML = `<heml>
  <head>
  </head>
  <body>
  </body>
</heml>`

class EditorPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editor: <div>loading</div>,
      view: 'preview',
      heml: defaultHEML,
      html: '',
      mounted: false,
      metadata: {},
      errors: [],
      height: 100,
      resizing: false,
    }
  }

  componentDidMount() {
    this.setState({ height: document.body.clientHeight - 200, mounted: true })

    if (this.props.location.hash.indexOf('#homeEditor') >= 0) {
      location.hash = ''
      this.updateHEML(localStorage.getItem('homeEditor'))
    }
    if (localStorage.getItem('heml')) {
      this.updateHEML(localStorage.getItem('heml'))
    } else {
      this.updateHEML(defaultHEML)
    }
  }

  updateHEML(heml) {
    this.setState({ heml })
    localStorage.setItem('heml', heml)

    console.log(heml)

    return HEML(heml).then(({ html, errors, metadata, id }) => {
      this.setState({ html, errors, metadata })
      this.updatePreview(html)
    })
  }

  updatePreview(html) {
    const preview = document.getElementById('preview')

    preview.contentWindow.document.open()
    preview.contentWindow.document.write(html)
    preview.contentWindow.document.close()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Editor &middot; HEML </title>
        </Helmet>
        <Header currentPath={this.props.location.pathname} fixed />
        <div id="editor">
          <SplitPane
            split="vertical"
            defaultSize="40%"
            onDragStarted={() => this.setState({ resizing: true })}
            onDragFinished={() => this.setState({ resizing: false })}
          >
            <SplitPane
              pane2Style={{ background: '#F4F7FB' }}
              split="horizontal"
              defaultSize={this.state.height}
              onChange={height => (
                this.setState({ height }), console.log(this.state.height)
              )}
            >
              <Editor
                mode="xml"
                theme="github"
                height={this.state.height + 'px'}
                width="100%"
                value={this.state.heml}
                setOptions={{ enableEmmet: true, useSoftTabs: true, tabSize: 2 }}
                onChange={heml => this.updateHEML(heml)} />
              <div id="meta">
                <div>
                  <pre>
                    <code>{JSON.stringify(this.state.metadata, null, 2)}</code>
                  </pre>
                </div>
              </div>
            </SplitPane>
            <div id="results">
              <iframe
                id="preview"
                style={{
                  display: this.state.view === 'preview' ? 'block' : 'none',
                }}
              />
              <pre
                id="html"
                style={{
                  display: this.state.view === 'html' ? 'block' : 'none',
                }}
              >
                {this.state.html}
              </pre>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  display: this.state.resizing ? 'block' : 'none',
                }}
              />
            </div>
          </SplitPane>
        </div>
        <style jsx global>{styles}</style>
      </div>
    )
  }
}

export default EditorPage
