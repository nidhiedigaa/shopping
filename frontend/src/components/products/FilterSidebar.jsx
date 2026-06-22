import React,{useEffect, useState} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const navigate=useNavigate()
    const [filters,setFilters]=useState({
        category:"",
        gender:"",
        color:"",
        size:[],
        material:[],
        brand:[],
        minPrice:0,
        maxPrice:100
    })
    const [priceRange,setPriceRange]=useState([0,10])
    const categories=["Top Wear","Bottom Wear"]
    const colors = [
  "Red",
  "Blue",
  "Black",
  "Green",
  "Yellow",
  "Gray",
  "White",
  "Pink",
  "Beige",
  "Navy"
];
const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL"
];
const materials = [
  "Cotton",
  "Wool",
  "Denim",
  "Polyester",
  "Silk",
  "Linen",
  "Viscose",
  "Fleece"
];
const brands = [
  "Urban Threads",
  "Modern Fit",
  "Street Style",
  "Beach Breeze",
  "Fashionista",
  "ChicStyle"
];
const genders=["Men","Women"]

const handleFilterChange=(e)=>
{
    const {name,value,checked,type}=e.target;
    let newFilters={...filters}
    if(type==="checkbox")
    {
        if(checked)
        {
            newFilters[name]=[...(newFilters[name]|| []),value]

        }
        else{
            newFilters[name]=newFilters[name].filter((item)=>item!==value)
        } 
       
    }
     else
        {
            newFilters[name]=value;
        }
        setFilters(newFilters)
        updateUrlParams(newFilters)
        
}
const updateUrlParams=(newFilters)=>
{
    const params=new URLSearchParams();
    Object.keys(newFilters).forEach((key)=>{
        if(Array.isArray(newFilters[key])&&newFilters[key].length>0)
        {
            params.append(key,newFilters[key].join(","))
        } else if (newFilters[key])
        {
            params.append(key,newFilters[key])
        }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`)

}
useEffect(()=>
{
    const params=Object.fromEntries([...searchParams])
    setFilters({category:params.category || "",
        gender:params.gender || "",
        color:params.color || "",
        size: params.size ? params.size.split(","):[],
        material: params.material ? params.material.split(","):[],
        brand: params.brand ? params.brand.split(","):[],
        minPrice:params.minPrice || 0,
        maxPrice: params.maxPrice || 100
    });
    setPriceRange([0,params.maxPrice||100])
},[searchParams])
const handlePriceChange=(e)=>
{
    const newPrice=e.target.value;
    setPriceRange([0,newPrice])
    const newFilters={...filters,minPrice:0,maxPrice:newPrice}
    setFilters(filters)
    updateUrlParams(newFilters)
}
  return (
    <div className='p-4'>
        <h3 className='text-xl font-medium text-gray-800 mb-4'>
            Filter
        </h3>
        <div className='mb-6'>
            <label htmlFor="" className='block text-gray-600 font-medium mb-2'>
                Category
            </label>
            {categories.map((category)=>
            {
                return (<div className='flex items-center mb-1' key={category}>

                    <input checked={filters.category}  onChange={handleFilterChange} type="radio" name="category" className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
                    <span className='text-gray-700'>
                    {category}
                    </span>
                </div>)
            })}
           
        </div>
        <div className='mb-6'>
            <label htmlFor="" className='block text-gray-600 font-medium mb-2'>
                Gender
            </label>
            {genders.map((gender)=>
            {
                return (<div className='flex items-center mb-1' key={gender}>

                    <input checked={filters.gender===gender} value={gender}  onChange={handleFilterChange} type="radio" name="gender" className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'/>
                    <span className='text-gray-700'>
                    {gender}
                    </span>
                </div>)
            })}
           
        </div>
        <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
                Color
            </label>
            <div className="flex flex-wrap gap-2">
                {colors.map((color)=>{
                  return  <button value={color} onClick={handleFilterChange} style={{backgroundColor:color.toLowerCase()}} name="color" className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color===color?"ring-2 ring-blue-500":""}`} key={color}>
                            
                    </button>
                })}
            </div>
        </div>
        <div className='mb-6'>
                <label htmlFor="" className='block text-gray-600 font-medium mb-2'>
                    Size
                </label>
                {sizes.map((size)=>
                {
                    return(<div key={size} className='flex items-center mb-1'>
                        <input checked={filters.size.includes(size)} type="checkbox" value={size} onChange={handleFilterChange} name="size"  className='mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 border-gray-300'/>
                        <span className='text-gray-700'>
                            {size}
                        </span>
                    </div>)
                })}
        </div>
         <div className='mb-6'>
                <label htmlFor="" className='block text-gray-600 font-medium mb-2'>
                    Brands
                </label>
                {brands.map((brand)=>
                {
                    return(<div key={brand} className='flex items-center mb-1'>
                        <input checked={filters.brand.includes(brand)} value={brand} onChange={handleFilterChange} type="checkbox" name="brand"  className='mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 border-gray-300'/>
                        <span className='text-gray-700'>
                            {brand}
                        </span>
                    </div>)
                })}
        </div>
          <div className='mb-6'>
                <label htmlFor="" className='block text-gray-600 font-medium mb-2'>
                    Material
                </label>
                {materials.map((material)=>
                {
                    return(<div key={material} className='flex items-center mb-1'>
                        <input checked={filters.material.includes(material)} value={material} onChange={handleFilterChange} type="checkbox" name="material"  className='mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 border-gray-300'/>
                        <span className='text-gray-700'>
                            {material}
                        </span>
                    </div>)
                })}
        </div>
        <div className='mb-8'>
                <label htmlFor="" className='block text-gray-600 font-medium mb-2'>
                    Price Range
                </label>
                <input value={priceRange[1]} onChange={handlePriceChange} type="range" name="priceRange" min={0} max={100} className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'/>
                <div className='flex justify-between text-gray-600 mt-2 '>
                <span>
                    $0
                </span>
                <span>
                    ${priceRange[1]}
                </span>
                </div>
        </div>
    </div>
  )
}

export default FilterSidebar