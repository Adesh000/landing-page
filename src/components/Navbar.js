import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <img src='/nodeshark_logo_fukk.png' className='logo' alt='nodeshark-logo'/>
      <div>
        <ul className='list'>
          <li className='list-item'>Home</li>
          <li className='list-item'>About</li>
          <li className='list-item'>Contact us</li>
        </ul>
      </div>
      <button type='button' className='btn'>Sign up</button>
    </div>
  )
}

export default Navbar
