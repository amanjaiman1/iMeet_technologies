import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-black'>
        <ul className='flex links text-white text-center gap-20 justify-center items-center top-4 relative'>
            <li >Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar