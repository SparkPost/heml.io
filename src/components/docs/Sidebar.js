import React from 'react'
import _ from 'lodash'
import { sidebar as styles } from '../../styles'
import GithubSlugger from 'github-slugger'

export default ({ headings, extras }) => {
  const slugger = new GithubSlugger()
  if (headings.length + _.keys(extras).length < 3) return <aside />

  return (
    <aside>
      <ul>
        {headings.filter(({ depth }) => depth <= 3).map(({ value, depth }) => {
          const slug = slugger.slug(value)
          return (
            <li key={slug}>
              <a
                href={`#${slug}`}
                dangerouslySetInnerHTML={{
                  __html: `${_.repeat('&nbsp;', (depth - 2) * 4)}${value}`,
                }}
              />
            </li>
          )
        })}
        {_.isEmpty(extras) ? '' : <li className="divider" />}
        {_.map(extras, (href, text) => {
          return (
            <li key={href}>
              <a href={`#${href}`}>{text}</a>
            </li>
          )
        })}
      </ul>
      <style jsx>{styles}</style>
    </aside>
  )
}
