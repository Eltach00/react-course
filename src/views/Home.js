import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../hooks/useStore'
import { Link } from 'react-router-dom'

export default observer(function Home({}) {
  const [productsStore] = useStore('products')
  const [cartStore] = useStore('cart')
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
                  <h2>{item.title}</h2>
                  <div>{item.price} RUB</div>
                  <Link to={`/product/${item.id}`}>Read More</Link>
                  <hr />
                  {cartStore.inCart(item.id) ? (
                    <button
                      disabled={cartStore.inProcess.some((id) => id == item.id)}
                      className="btn btn-danger"
                      onClick={() => cartStore.remove(item.id)}
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      disabled={cartStore.inProcess.some((id) => id == item.id)}
                      className="btn btn-primary"
                      onClick={() => cartStore.add(item.id)}
                    >
                      Add to cart
                    </button>
                  )}
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
