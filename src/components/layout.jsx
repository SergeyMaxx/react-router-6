import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>Users layout</h1>
      <Link to="/">Main page</Link>
        <Outlet/>
    </div>
  )
}

export default Layout