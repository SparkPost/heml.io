import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'

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

const FaqsPage = ({ location }) => (
  <div>
    <Header currentPath={location.pathname} fixed />
    <h1>FAQs</h1>

    <h3>Do I need to test my emails?</h3>
    <p>
      100% yes! You should always test your emails, regardless of the tool you
      are using! Check out{' '}
      <a href="https://www.emailonacid.com/">Email on Acid</a> and{' '}
      <a href="https://litmus.com/">Litmus</a> for automated testing.
    </p>
  </div>
)

export default FaqsPage
