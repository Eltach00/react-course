import React from 'react'
import Cart from './views/Cart'
import Order from './views/Order'
import Result from './views/Result'
import { Link, Route, Routes } from 'react-router-dom'
import E404 from './views/E404'
import Home from './views/Home'
import Product from './views/Product'
import { useStore } from './hooks/useStore'

export default function () {
  const [cart] = useStore('cart')
  return (
    <>
      <header>
        <div className="container mt-1">
          <div className="row justify-content-between">
            <div className="col">logo</div>
            <div className="col col-1">In cart: {cart.total} RUB</div>
          </div>
        </div>
        <hr />
      </header>
      <div className="container mt-1">
        <div className="row ">
          <aside className="col col-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-group-item">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="list-group-item">
                <Link to="/order">Order</Link>
              </li>
            </ul>
          </aside>
          <main className="col col-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
              <Route path="/result" element={<Result />} />
              <Route path="*" element={<E404 />} />
            </Routes>
          </main>
        </div>
      </div>
      <hr />
      <footer>
        <div className="container mt-1">React 2022</div>
      </footer>
    </>
  )
}
