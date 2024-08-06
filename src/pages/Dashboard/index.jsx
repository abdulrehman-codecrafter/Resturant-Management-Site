import React from 'react'
import Home from "./Home"
import Add from "./Add"
import Update from "./Update"
import { Routes,Route } from 'react-router-dom'

export default function Dashboard() {
  return (
    <Routes>
      <Route index element={<Home /> } />
      <Route path="add" element={<Add/>}/>
      <Route path="update" element={<Update/>}/>
    </Routes>
  )
}
