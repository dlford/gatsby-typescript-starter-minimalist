import React from 'react'

import Header from './header'
import Footer from './footer'
import '~/styles/reset.css'
import '~/styles/layout.css'

export interface LayoutProps {
  children: JSX.Element[] | JSX.Element
  location: Location
}

const Layout = ({ children, location }: LayoutProps) => (
  <div className='page-wrapper'>
    <Header shouldShowBigHeader={location.pathname === '/'} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
