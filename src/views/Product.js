import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../hooks/useStore'

export default observer(function Product({}) {
  const [productStore] = useStore('products')
  const { id: param } = useParams()
  const product = productStore.products.find((pr) => pr.id == param)

  return (
    <div className="container mt-1 mb-1">
      <h1>Product</h1>
      <div className="mt-1 mb-2">{product.title}</div>
      <div>
        <Link className="btn btn-primary" to="/">
          Back to Catalog
        </Link>
      </div>
    </div>
  )
})
