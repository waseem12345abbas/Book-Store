import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container mx-auto shadow-md py-6 bg-gray-300'>
      <ul className='flex justify-center items-center gap-[1rem] font-medium'>
        <Link to={'/'} className='hover:text-green-800 hover:font-bold'>Home</Link>
        <Link to={'/books'} className='hover:text-green-800 hover:font-bold'>Books</Link>
        <Link to={'/signup'} className='hover:text-green-800 hover:font-bold'>Register</Link>
        <Link to={'/users'} className='hover:text-green-800 hover:font-bold'>Profile</Link>
        <Link to={'/products'}  className='hover:text-green-800 hover:font-bold'>Products</Link>
      </ul>
    </div>
  )
}

export default Navbar
