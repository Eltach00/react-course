import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../hooks/useStore'
import { Link } from 'react-router-dom'

export default observer(function Home({}) {
  const [productsStore] = useStore('products')
  const { products } = productsStore
  return (
    <div className="container">
      <h1>Catalog</h1>
      <div className="row">
        {products.map((item) => {
          return (
            <div className="col col-4 mt-3" key={item.id}>
              <div className="card">
                <div className="card-body">
                  <h1>{item.title}</h1>
                  <div>{item.price}</div>
                  <Link to={`/product/${item.id}`}>Read More</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
})
