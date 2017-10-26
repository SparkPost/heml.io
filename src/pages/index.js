import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Editor from '../components/Editor'
import Button from '../components/Button'
import ProgramWindow from '../components/ProgramWindow'

const Hero = styled.div`
  z-index: 1;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme.colors.primary} 0%,
    #68b8fe 100%
  );
  color: #fff;
  padding: 70px;
  border-radius: 0 0 50% 50% / 4%;
  display: flex;
  justify-content: space-between;

  h2 {
    margin-top: 1.5rem;
    font-size: 3.5em;
    margin-bottom: 0.25em;
    font-weight: bold;
    letter-spacing: 1.5px;
    line-height: 1.05em;
    display: inline-block;
  }

  h3 {
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 1.5em;
    font-weight: 300;
  }
`

const PreviewButton = styled(Button)`
  position: absolute;
  bottom: 1em;
  right: 2em;
  z-index: 44;
  margin-top: 1em;
  box-shadow: 0 2px 5px 0px rgba(43, 63, 76, 0.18);
  border: 1px solid #eeeeee;

  &:hover {
    box-shadow: 0 3px 7px 0px rgba(43, 63, 76, 0.2);
  }
`
const Philosophy = styled.section`
  background: #f9f8f9;
  display: flex;
  justify-content: space-around;
  margin-top: -2em;
  padding: 5em 2em 2em 2em;

  div {
    width: 30%;
  }

  h3 {
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin-top: 0;
  }
`

class IndexPage extends Component {
  componentDidMount() {
    localStorage.setItem('homeEditor', previewHEML)
  }

  render() {
    return (
      <div>
        <Header currentPath={this.props.location.pathname} fixed />
        <Hero>
          <section style={{ width: '50%', marginLeft: '3%' }}>
            <h2>Quickly craft clean, responsive emails</h2>
            <h3>
              HEML is an open source markup language for building responsive
              email. It gives you the native power of HTML without having to
              deal with all of the email quirks. HEML makes building emails as
              easy as building websites.
            </h3>
            <Button to="/docs/getting-started/guide" large>
              Get Started
            </Button>
            <Button to="/docs/getting-started/overview" large transparent>
              Docs
            </Button>
          </section>
          <section style={{ width: '45%' }}>
            <ProgramWindow title="welcome.heml">
              <Editor
                value={previewHEML}
                setOptions={{ minLines: 20, maxLines: 20 }}
                onChange={html => localStorage.setItem('homeEditor', html)}
              />
              <PreviewButton to="/editor#homeEditor">Preview</PreviewButton>
            </ProgramWindow>
          </section>
        </Hero>
        <Philosophy>
          <div>
            <h3>Native Feel</h3>
            <p>
              Do you know HTML and CSS? Check out our docs and you're off to the
              races! No special rules or styling paradigms to master.
            </p>
          </div>
          <div>
            <h3>Forward Thinking</h3>
            <p>
              HEML is designed to take advantage of all that email can do while
              still providing a solid experience for all clients.{' '}
            </p>
          </div>
          <div>
            <h3>Extendable</h3>
            <p>
              You can create your own powerful elements and style rules. Share
              them with the world, or keep em to yourself. Your choice.
            </p>
          </div>
        </Philosophy>
      </div>
    )
  }
}

const previewHEML = `<heml>
  <head>
    <subject>Welcome to HEML!</subject>
    <style>
      #container {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <block id="container">
      <row>
        <column>
          <h1>Explore the world of email! 💌</h1>
        </column>
      </row>
    </block>
  </body>
</heml>
`

export default IndexPage
