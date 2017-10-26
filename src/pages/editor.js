import React, { Component } from 'react'
import Helmet from 'react-helmet'
import SplitPane from 'react-split-pane'
import styled from 'styled-components'
import axios from 'axios'
import JSONTree from 'react-json-tree'
import { isEmpty, debounce } from 'lodash'
import Header from '../components/Header'
import Editor from '../components/Editor'
import HemlResults from '../components/HemlResults'

const TabSet = styled.div`
  color: white;
  background: #F9F9F9;
  border: 1px solid #ddd;
  position: absolute;
  right: 2rem;
  top: .5rem;
  border-radius: 4px;
  overflow: hidden;`


const Tab = styled.button`
  background: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  padding: .75em 1.25em;
  font: inherit;
  border: 0;
  width: 7em;
  border-radius: 0;
  cursor: pointer;
  outline: 0;

  &:first-child {
    border-right: 1px solid #ddd;
  }`

try {
  require('brace/mode/xml')
  require('brace/theme/github')
} catch (e) {
  // swallow the errors
}

const jsonTheme = {
  scheme: 'atelier lakeside',
  author:
    'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
  base00: '#161b1d',
  base01: '#1f292e',
  base02: '#516d7b',
  base03: '#5a7b8c',
  base04: '#7195a8',
  base05: '#7ea2b4',
  base06: '#c1e4f6',
  base07: '#ebf8ff',
  base08: '#d22d72',
  base09: '#935c25',
  base0A: '#8a8a0f',
  base0B: '#568c3b',
  base0C: '#2d8f6f',
  base0D: '#257fad',
  base0E: '#5d5db1',
  base0F: '#b72dd2',
}

const HEML = contents => {
  return axios({
    method: 'post',
    url: 'https://heml-api.herokuapp.com/',
    data: {
      heml: contents,
    },
  }).then(({ data }) => data)
}

const defaultHEML = `<heml>
  <head>
    <subject>Welcome to HEML!</subject>
    <style>
      body { background: SkyBlue; }
      h1 { color: DarkViolet; }
    </style>
  </head>
  <body>
    <container>
      <marquee><h1>Explore the world of email! 💌</h1></marquee>
    </container>
  </body>
</heml>`

const ResizeCover = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: ${props => (props.resizing ? 'block' : 'none')};
`

const Wrapper = styled.div`
  #editor,
  #editor > div {
    padding: 68px 0 0 0;
    margin-top: -68px;
  }

  #editor {
    outline: 0;
    font-size: 16px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .Resizer {
    box-sizing: border-box;
    background: #f9f9f9;
    z-index: 1;
    background-clip: padding-box;
    border-style: solid;
    border-color: #f1f1f1;
  }

  .Resizer.horizontal {
    cursor: row-resize;
    width: 100%;
    border-width: 3px 0 1px 0;
    font-weight: 600;
    padding: 4px;

    &:before {
      content: 'Metadata';
    }
  }

  .Resizer.vertical {
    width: 15px;
    cursor: col-resize;
    border-width: 0 1px 0 1px;
  }

  .vertical section {
    width: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .vertical header {
    padding: 1rem;
    background: #eee;
  }

  .vertical footer {
    padding: 1rem;
    background: #eee;
  }

  .horizontal section {
    width: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .horizontal header {
    padding: 1rem;
    background: #eee;
  }

  .horizontal footer {
    padding: 1rem;
    background: #eee;
  }

  .parent {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    background: #ffa;
    margin: 5rem;
    flex: 1;
  }
`

class EditorPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'preview',
      heml: '',
      html: '',
      metadata: {},
      errors: [],
      height: 100,
      resultsHeight: '100%',
      resizing: false,
    }

    this.renderHEML = debounce(
      heml =>
        HEML(heml).then(({ html, errors, metadata, id }) => {
          this.setState({ html, errors, metadata })
        }),
      500
    )
  }

  componentDidMount() {
    this.setState({
      height: document.body.clientHeight - 200,
      resultsHeight: document.body.clientHeight - 68,
    })

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

    this.renderHEML(heml)
  }

  toggleTab() {
    this.setState({ tab: this.state.tab === 'preview' ? 'code' : 'preview' })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Editor &middot; HEML </title>
        </Helmet>
        <Header
          currentPath={this.props.location.pathname}
          nav={[
            <TabSet key="1">
              <Tab active={this.state.tab === 'preview'} onClick={() => this.toggleTab()}>Preview</Tab>
              <Tab active={this.state.tab === 'code'} onClick={() => this.toggleTab()}>Code</Tab>
            </TabSet>
          ]}
          fixed />
        <Wrapper>
          <div id="editor">
            <SplitPane
              split="vertical"
              defaultSize="40%"
              onDragStarted={() => this.setState({ resizing: true })}
              onDragFinished={() => this.setState({ resizing: false })}
            >
              <SplitPane
                pane2Style={{ background: '#fbfcfe' }}
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
                  onChange={heml => this.updateHEML(heml)}
                />
                <div id="meta">
                  {!isEmpty(this.state.metadata) && (
                    <JSONTree
                      hideRoot={true}
                      theme={jsonTheme}
                      data={this.state.metadata}
                    />
                  )}
                  {isEmpty(this.state.metadata) && (
                    <h3 style={{ color: '#888', textAlign: 'center' }}>
                      no metadata
                    </h3>
                  )}
                </div>
              </SplitPane>
              <div style={{ height: '100%', width: '100%' }}>
                <HemlResults
                  height={this.state.resultsHeight + 'px'}
                  html={this.state.html}
                  errors={this.state.errors}
                  tab={this.state.tab}
                />
                <ResizeCover
                  resizing={this.state.resizing}
                />
              </div>
            </SplitPane>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default EditorPage
