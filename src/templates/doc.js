import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Link from 'gatsby-link'
import classnames from 'classnames'
import _ from 'lodash'
import Nav from '../components/docs/Nav'
import Documentation from '../components/docs/Documentation'
import Sidebar from '../components/docs/Sidebar'


export default ({ pathContext, location }) => {
  const { page, nav } = pathContext
  const description = page.frontmatter.description ? (<p>{page.frontmatter.description}</p>) : '';

  const extras = _.pickBy(
    _.mapKeys(
      _.pick(page.frontmatter, ['tests', 'issues', 'edit']),
      (href, text) => {
        switch (text) {
          case 'tests':
            return 'Litmus Tests'

          case 'issues':
            return 'Report a Bug'

          case 'edit':
            return 'Edit this Page'
        }
      }
    ),
    _.identity
  )

  return (
    <div>
      <Helmet>
        <title>{page.frontmatter.title} &middot; HEML </title>
      </Helmet>
      <Header currentPath={location.pathname} fixed />
      <Nav nav={nav} currentPath={location.pathname} />
      <main>
        <header>
          <h1>{page.frontmatter.title}</h1>
          {description}
        </header>
        <Documentation contents={page.html} />
        <style jsx>{`
          main {
            float: left;
            width: 60%;
            margin-left: 20%;
            padding: 2em 4em;
          }

          header {
            padding: 0 0 .25em 0;
            margin-bottom: 1.5em;
            border-bottom: 2px solid #f0f0f0;
          }

          h1 {
            margin-top: 0;
            margin-bottom: .5em;
          }
        `}</style>
      </main>
      <Sidebar headings={page.headings} extras={extras} />
    </div>
  )
}
