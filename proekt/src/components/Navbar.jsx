import React from 'react'
import Logo from '../assets/logo.svg'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='nav'>
    <img src={Logo} alt='logo'/>
      <Button />
    </nav>
  )
}

export default Navbar