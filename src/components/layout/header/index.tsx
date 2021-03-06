import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import LogoImage from '~/images/logo'
import Nav from '~/components/layout/nav'
import css from './header.module.css'

export interface HeaderProps {
  shouldShowBigHeader: boolean
}

type QueryProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const HEADER_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Header = ({ shouldShowBigHeader }: HeaderProps) => {
  const data = useStaticQuery<QueryProps>(HEADER_QUERY)
  const { title } = data.site.siteMetadata

  return (
    <header className={css.bigHeader}>
      <Nav />
      {shouldShowBigHeader && (
        <div className={css.logoImage}>
          <LogoImage width='30vmin' />
        </div>
      )}
      <h1 className={css.logoText}>{title}</h1>
    </header>
  )
}

export default Header
