import React from 'react'
import { documentation as styles } from '../../styles'

export default ({ contents }) => (
<div id="documentation">
  <div dangerouslySetInnerHTML={{ __html: contents }} />
  <style jsx>{styles}</style>
</div>) 