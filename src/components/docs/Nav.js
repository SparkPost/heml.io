import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import { navigation as styles } from '../../styles'

export default ({ currentPath, nav }) => (
  <nav className="navigation">
    <ul>
      {nav.map(parent => {
        return (
          <li key={parent.path}>
            <Link to={parent.path}>{parent.title}</Link>
            <ul>
              {parent.children.map(child => (
                <li key={child.path}>
                  <Link
                    to={child.path}
                    className={classnames({
                      active: currentPath === child.path,
                    })}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        )
      })}
    </ul>
    <style jsx>{styles}</style>
  </nav>
)
