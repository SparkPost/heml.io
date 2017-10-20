import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Hero from '../components/home/Hero'
import Demo from '../components/home/Demo'
import Button from '../components/Button'
import { philosophy, hero } from '../styles'


class IndexPage extends Component {
  componentDidMount() {
    localStorage.setItem('homeEditor', previewHEML)
  }

  render() {
    return (
      <div>
        <Header currentPath={this.props.location.pathname} fixed />
        <Hero>
          <section
            style={{ width: '50%', float: 'left', marginLeft: '3%' }}>
            <h2>Quickly craft clean, responsive emails</h2>
            <h3>
              HEML is a open source framework for coding HTML and plaintext
              emails. It focuses on abstracting away the complexities of email so
              you can send without worry.
            </h3>
            <Button to="/guide" large>
              Get Started
            </Button>
            <Button to="/docs/getting-started/overview" large transparent>
              Docs
            </Button>
          </section>
          <section style={{ width: '45%', float: 'right' }}>
            <Demo code={previewHEML.trim()} />
          </section>
        </Hero>
        <section className="philosophy">
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
          <style jsx>{philosophy}</style>
        </section>
      </div>
    )
  }
}

const previewHEML = `
<heml>
  <head>
    <subject>Welcome to HEML!</subject>
    <style>
      #container {
        width: 100%;
        max-width: 640px;
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
