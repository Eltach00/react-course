import React from 'react'
import { Link } from 'react-router-dom'
import AppCart from './components/AppCart'
import RoutesView from './routes/routesView'

export default function () {
  return (
    <>
      <header>
        <div className="container mt-1">
          <div className="row justify-content-between">
            <div className="col">logo</div>
            <AppCart />
          </div>
        </div>
        <hr />
      </header>
      <div className="container mt-1">
        <div className="row ">
          <aside className="col col-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/">Catalog</Link>
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
            <RoutesView />
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
