import React from 'react'
import womensCollectionImage from "../../assets/womens-collection.webp"
import mensCollectionImage from "../../assets/mens-collection.webp"
import { Link } from 'react-router-dom'

function GenderCollectionSection() {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className='relative flex-1'>
        <img
        className='w-full h-[700px] object-cover'
        alt="Women's collection"
        src={womensCollectionImage}
        />
        <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
        <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women's Collection</h2>
        <Link to="/collections/all?gender=Women" className='text-gray-900 underline'>
        Shop Now
        </Link>
        </div>
            </div>
            <div className='relative flex-1'>
        <img
        className='w-full h-[700px] object-cover'
        alt="Men's collection"
        src={mensCollectionImage}
        />
        <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
        <h2 className='text-2xl font-bold text-gray-900 mb-3'>Men's Collection</h2>
        <Link to="/collections/all?gender=Men" className='text-gray-900 underline'>
        Shop Now
        </Link>
        </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection