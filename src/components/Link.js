import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

const Link = styled(GatsbyLink)`
  color: inherit; 

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export Link