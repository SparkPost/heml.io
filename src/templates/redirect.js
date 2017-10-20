import React from 'react'
import Redirect from '../components/Redirect'

export default ({ pathContext }) => {
  return <Redirect to={pathContext.to} />
}
