import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import styles from '../styles'

const DefaultLayout = ({ children }) => (
  <div>
    <Helmet title="HEML" />
    {children()}
    <style jsx global>
      {styles}
    </style>
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.func,
}

export default DefaultLayout
