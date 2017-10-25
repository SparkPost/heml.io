import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import styled from 'styled-components'

const Logo = styled.h1`
  font-size: 1.5em;
  margin: 0;
  line-height: 1em;
  font-family: color: ${props => props.theme.monospace};
  font-weight: 400;
  color: ${props => props.theme.colors.primary};

  a {
    color: inherit;
    text-decoration: inherit;
  }
`

const Header = styled.header`
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-bottom: 1px solid #f0f0f0;
  position: ${props => props.fixed ? 'fixed' : 'relative'};
  top: 0;
  left: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.25em 2em;
  z-index: 99;
  height: auto;

  ul {
      padding: 0;
      list-style: none;
      margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 .5em;
  }

  a {
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
  }

  .active {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }
`

export default ({ currentPath, fixed, nav }) => (
  <Offset fixed={fixed}>
    <Header fixed={fixed}>
      <Logo>
        <Link to="/">&lt;heml&gt;</Link>
      </Logo>
      {!nav ? (
        <ul>
          <li>
            <Link
              className={classnames({ active: currentPath === '/docs/getting-started/guide' })}
              to="/docs/getting-started/guide"
            >
              Guide
            </Link>
          </li>
          <li>
            <Link
              className={classnames({
                active: currentPath.startsWith('/docs') && currentPath !== '/docs/getting-started/guide',
              })}
              to="/docs/getting-started/overview"
            >
              Documentation
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
    </Header>
  </Offset>
)

const Offset = ({ fixed, children }) => {
  return fixed ? (
    <div>
      {children}
      <div style={{ height: '68px' }} />
    </div>
  ) : (
    children
  )
}
