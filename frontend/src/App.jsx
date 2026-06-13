import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App
