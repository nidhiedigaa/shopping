import React from 'react'
import { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const Searchbar = () => {
    const [searchTerm,setSearchTerm]=useState("")
    const [isOpen, setIsOpen]=useState(false)

    const handleSearchToggle=()=>
    {
        setIsOpen(!isOpen)
    }
    const handleSearch=(e)=>
    {
        e.preventDefault()
        console.log(searchTerm)
        setIsOpen()
    }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen?"absolute top-0 left-0 w-full bg-white h-24 z-50":""}`}>
        {isOpen?(<form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
            <div className='relative w-1/2'>
            <input onChange={(e)=>setSearchTerm(e.target.value)} placeholder='search' type='text' value={searchTerm} className='bg-gray-100  px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-1 w-full
            placeholder:text-gray-700'/>
            <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                <HiMagnifyingGlass>

                </HiMagnifyingGlass>
            </button>
            </div>
            <button type='button' className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800' onClick={handleSearchToggle}>
                <HiMiniXMark className='h-6 w-6'>

                </HiMiniXMark>
            </button>
        </form>):(<button onClick={handleSearchToggle}>
            <HiMagnifyingGlass className='h-6 w-6'>

            </HiMagnifyingGlass>
        </button>)}
    </div>
  )
}

export default Searchbar