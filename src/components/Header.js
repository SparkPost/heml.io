import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import { header as styles } from '../styles'

const Header = ({ currentPath, fixed, nav }) => (
  <Wrapper fixed={fixed}>
    <header className={classnames('header', { fixed: fixed })}>
      <h1 id="logo">
        <Link to="/">&lt;heml&gt;</Link>
      </h1>
      {!nav ? (
        <ul>
          <li>
            <Link
              className={classnames({ active: currentPath === '/guide' })}
              to="/guide"
            >
              Guide
            </Link>
          </li>
          <li>
            <Link
              className={classnames({
                active: currentPath.startsWith('/docs'),
              })}
              to="/docs/getting-started/overview"
            >
              Documentation
            </Link>
          </li>
          <li>
            <Link
              className={classnames({
                active: currentPath.startsWith('/templates'),
              })}
              to="/templates"
            >
              Templates
            </Link>
          </li>
          <li>
            <Link
              className={classnames({
                active: currentPath.startsWith('/editor'),
              })}
              to="/editor"
            >
              Editor
            </Link>
          </li>
        </ul>
      ) : (
        nav
      )}
      <style jsx>{styles}</style>
    </header>
  </Wrapper>
)

const Wrapper = ({ fixed, children }) => {
  return fixed ? (
    <div>
      {children}
      <div style={{ height: '68px' }} />
    </div>
  ) : (
    children
  )
}

export default Header
