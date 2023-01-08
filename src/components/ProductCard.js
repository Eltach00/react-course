import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, inCart, pending, add, remove }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{product.title}</h2>
        <div>{product.price} RUB</div>
        <Link to={`/product/${product.id}`}>Read More</Link>
        <hr />
        {inCart ? (
          <button
            disabled={pending}
            className="btn btn-danger"
            onClick={() => remove(product.id)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            disabled={pending}
            className="btn btn-primary"
            onClick={() => add(product.id)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  )
}
