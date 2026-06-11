import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser,HiOutlineShoppingBag,HiBars3BottomRight} from "react-icons/hi2"
import Searchbar from './Searchbar'
import Cartdrawer from '../layout/Cartdrawer'

export const Navbar = () => {
  return (
    <>
    <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
   <div>
     <Link to="/" className='text-2xl font-medium'>
    Rabbit
    </Link>
   </div>
   <div className='hidden md:flex space-x-6'>
    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
    MEN
    </Link>
    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
    WOMEN
    </Link>
    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
    TOPWEAR
    </Link>
    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
    BOTTOMWEAR
    </Link>
   </div>
   <div className='flex items-center space-x-4'>
    <Link to="/profile" className='hover:text-black'>
    <HiOutlineUser className='h-6 w-6 text-gray-700'></HiOutlineUser>
    </Link>
    <button className='relative hover:text-black'>
    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'></HiOutlineShoppingBag>
    <span className='absolute bg-rabbit-red -top-1 text-white text-xs rounded-full px-2 py-0.5'>1</span>
    </button>
    <Searchbar></Searchbar>
    <button className='md:hidden'>
      <HiBars3BottomRight className='h-6 w-6 text-gray-700'></HiBars3BottomRight>
    </button>
   </div>
    </nav>
    <Cartdrawer></Cartdrawer>
    </>
  )
}
