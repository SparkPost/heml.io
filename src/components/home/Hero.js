import React from 'react'
import { hero as styles } from '../../styles'

export default ({ children }) => (
  <div className="hero">
    {children}
    <div style={{ clear: 'both' }} />
    <style jsx>{styles}</style>
  </div>
)