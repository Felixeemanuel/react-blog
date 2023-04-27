import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <>
        <nav className='nav-container'>
            <Link className='big-link' to="/">
            <h3 className='logo'>Blogs</h3>
            </Link>
            <ul>
                <li>
                    <Link className='link-tag' to="/blogs">Blogs</Link>
                </li>
                <li>
                <Link className='link-tag' to="/about">About</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </>
  )
}

export default Navbar