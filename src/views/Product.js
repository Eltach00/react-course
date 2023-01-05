import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../hooks/useStore'
import E404 from './E404'

export default observer(function Product({}) {
  const [cartStore] = useStore('cart')
  const [productStore] = useStore('products')
  const { id } = useParams()
  const product = productStore.getItem(id)

  if (!/^[1-9]+\d*$/.test(id) || !product) {
    return <E404 />
  }

  return (
    <div className="container mt-1 mb-1">
      <h3>Product</h3>
      <hr />
      <div className="row justify-content-between">
        <h1 className="col mt-1 mb-2">{product.title}</h1>
        <h1 className="col mt-1 mb-2">{product.price} RUB</h1>
        {cartStore.inCart(product.id) ? (
          <button
            className="col col-2 btn btn-danger"
            onClick={() => cartStore.remove(product.id)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="col col-2 btn btn-primary"
            onClick={() => cartStore.add(product.id)}
          >
            Add to cart
          </button>
        )}
      </div>
      <div>
        <Link className="btn btn-success mt-3" to="/">
          Back to Catalog
        </Link>
      </div>
    </div>
  )
})
