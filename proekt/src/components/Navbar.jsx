import React from 'react'
import Group from '../assets/group.png'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='nav'>
    <img src={Group} alt='logo'/>
      <Button />
    </nav>
  )
}

export default Navbar