import React, { useState } from 'react'

import Cart from './views/Cart'
import Order from './views/Order'
import Result from './views/Result'

import SettingContext from './context/settings'
import { Route, Routes } from 'react-router-dom'
import E404 from './views/E404'

export default function () {
  return (
    <div className="container mt-1">
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<E404 />} />
      </Routes>

      <hr />
      <footer>React 2022</footer>
    </div>
  )
}
