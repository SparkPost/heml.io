import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import { button as styles } from '../styles'

export default ({ children, to, transparent, large, className }) => {
  return (
  <Link
    className={classnames('button', className,
        { 'button--large': !!large,
        'button--transparent': !!transparent })}
    to={to}>
  {children}
  <style jsx>{styles}</style>
</Link>)
}