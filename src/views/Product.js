import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../hooks/useStore'

export default observer(function Product({}) {
  const [cart] = useStore('cart')

  const [productStore] = useStore('products')
  const { id } = useParams()
  const product = productStore.getItem(id)

  return (
    <div className="container mt-1 mb-1">
      <h3>Product</h3>
      <hr />
      <div className="row justify-content-between">
        <h1 className="col mt-1 mb-2">{product.title}</h1>
        <h1 className="col mt-1 mb-2">{product.price} RUB</h1>
        <button
          className="col col-2 btn btn-primary"
          onClick={() => cart.add(product)}
        >
          Add to cart
        </button>
      </div>
      <div>
        <Link className="btn btn-success mt-3" to="/">
          Back to Catalog
        </Link>
      </div>
    </div>
  )
})
