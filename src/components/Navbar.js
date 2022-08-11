import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cart = []
  return ( 
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2 text-light'>
            <Link to="/" className='navbar-brand ml-5'>React Redux Contact App</Link> || 
            <Link to="/header" className='navbar-brand ml-5'>React Redux Food Cart App</Link>
    </nav>
  )
}

export default Navbar;