import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaypalButton from './PaypalButton';

const cart={
    products:[
        {
            name:"Stylish Jacket",
            size:"M",
            color:"Black",
            price:120,
            image:"https://picsum.photos/150?random=1"
        },
        {
            name:"Casual Sneakers",
            size:"42",
            color:'White',
            price:75,
            image:"https://picsum.photos/150?random=2"
        }
    ],
    totalPrice:195
}
const Checkout = () => {
    const navigate=useNavigate();
    const [shippingAddress,setShippingAddress]=useState({
        firstName:"",
        lastName:"",
        address:"",
        city:"",
        postalCode:"",
        country:"",
        phone:""
    })
    const [checkoutId,setCheckoutId]=useState(null)
    const handleCreateCheckout=(e)=>
    {
        e.preventDefault()
        setCheckoutId(123)
    }
    const handlePaymentSuccess=(details)=>
    {
        navigate("/order-confirmation")
    }
  return (
    <div className='grid grid-cols-1 lg;grid-col-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
        <div className='bg-white rounded-lg p-6'>
            <h2 className='text-2xl uppercase mb-6'>
                Checkout
            </h2>
            <form action="" onSubmit={handleCreateCheckout}>
                <h3 className='text-lg mb-4'>
                    Contact Details
                </h3>
                <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700'>
                        Email
                    </label>
                    <input type="email" value="user@example.com" className='w-full p-2 border rounded' disabled/>

                </div>
                <h3 className='text-lg mb-4 '>
                    Delivery
                </h3>
                <div className='mb-4 grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block text-gray-700'>
                            First Name
                        </label>
                        <input required onChange={(e)=>setShippingAddress({...shippingAddress,firstName:e.target.value})} value={shippingAddress.firstName} type="text" className='w-full p-2 border rounded'  />
                    </div>
                </div>
                 <div className='mb-4 grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block text-gray-700'>
                            Last Name
                        </label>
                        <input required onChange={(e)=>setShippingAddress({...shippingAddress,lastName:e.target.value})} value={shippingAddress.lastName} type="text" className='w-full p-2 border rounded'  />
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700 '>
                        Address
                    </label>
                    <input required type="text" value={shippingAddress.address} onChange={(e)=>setShippingAddress({...shippingAddress,address:e.target.value})} className='w-full p-2 border rounded' />

                </div>
                <div className='mb-4 grid grid-cols-2 gap-4'>
                     <div className='mb-4 grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block text-gray-700'>
                            City
                        </label>
                        <input required onChange={(e)=>setShippingAddress({...shippingAddress,city:e.target.value})} value={shippingAddress.city} type="text" className='w-full p-2 border rounded'  />
                    </div>
                </div>
                 <div className='mb-4 grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block text-gray-700'>
                            Postal Code
                        </label>
                        <input required onChange={(e)=>setShippingAddress({...shippingAddress,postalCode:e.target.value})} value={shippingAddress.postalCode} type="text" className='w-full p-2 border rounded'  />
                    </div>
                </div>
                </div>
                 <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700 '>
                        Country
                    </label>
                    <input required type="text" value={shippingAddress.country} onChange={(e)=>setShippingAddress({...shippingAddress,country:e.target.value})} className='w-full p-2 border rounded' />

                </div>
                 <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700 '>
                        Phone
                    </label>
                    <input required type="text" value={shippingAddress.phone} onChange={(e)=>setShippingAddress({...shippingAddress,phone:e.target.value})} className='w-full p-2 border rounded' />

                </div>
                <div className='mt-6 '>
                    {!checkoutId?(<button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to payment</button>):(<div>
                        <h3 className='text-lg mb-4'>
                                Pay with Paypal
                        </h3>
                        <PaypalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err)=>alert("Payment failed. Try again")}></PaypalButton>
                    </div>)}
                </div>
            </form>
        </div>

    </div>
  )
}

export default Checkout