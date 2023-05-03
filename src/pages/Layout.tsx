import React from 'react'
import Nav from '../components/Nav'
import Home from './Home'

const Layout = () => {
  return (
    <div>
        <Nav variant='primary'/>
        <Home/>
    </div>
  )
}

export default Layout