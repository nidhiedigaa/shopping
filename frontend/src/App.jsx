import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import {Toaster} from "sonner"

export const App = () => {
  return (
    <BrowserRouter future={{v7_startTransition:true,v7_relativesplatPath:true}}>
    <Toaster position='top-right'/>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App
