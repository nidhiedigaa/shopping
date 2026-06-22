import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import {Toaster} from "sonner"
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Collections from './pages/Collections'
import ProductDetails from './components/products/ProductDetails'
import Checkout from './components/cart/Checkout'

export const App = () => {
  return (
    <BrowserRouter future={{v7_startTransition:true,v7_relativesplatPath:true}}>
    <Toaster position='top-right'/>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="login" element={<Login></Login>} ></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='profile' element={<Profile></Profile>}></Route>
      <Route path="collections/:collection" element={<Collections></Collections>}></Route>
      <Route path='product/:id' element={<ProductDetails></ProductDetails>}></Route>
      <Route path='checkout' element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App
