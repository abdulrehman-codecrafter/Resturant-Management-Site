import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Shop from "./Menu"
import Order from './Order'

export default function Frontened() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='menu' element={<Shop />} />
      <Route path='order' element={<Order />} />


    </Routes>
  )
}
