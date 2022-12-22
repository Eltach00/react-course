import React, { useState } from 'react'
import Cart from './Cart'
import Order from './Order'
import Result from './Result'

export default function () {
  // router
  const [page, setPage] = useState('Cart')
  const moveToCart = () => setPage('Cart')
  const moveToResult = () => setPage('Result')
  const moveToOrder = () => setPage('Order')

  // products
  const [products, setProducts] = useState(productsStub())
  const [total, setTotal] = useState(() => countTotal())

  function countTotal() {
    return products.reduce((sum, pr) => (sum += pr.price * pr.cnt), 0)
  }
  const setCnt = (id, cnt) => {
    setProducts(products.map((pr) => (pr.id != id ? pr : { ...pr, cnt })))
    setTotal(() => countTotal())
  }

  const handleDelete = (id) => {
    setProducts(products.filter((pr) => pr.id !== id))
    setTotal(() => countTotal())
  }

  return (
    <div className="container ">
      {page === 'Cart' && (
        <Cart
          onNext={moveToOrder}
          products={products}
          onChange={setCnt}
          onDelete={handleDelete}
          countTotal={countTotal}
          total={total}
        />
      )}
      {page === 'Order' && <Order onPrev={moveToCart} onNext={moveToResult} />}
      {page === 'Result' && <Result onPrev={moveToOrder} />}
    </div>
  )
}

function productsStub() {
  return [
    {
      id: 100,
      title: 'Ipnone 200',
      price: 12000,
      rest: 10,
      cnt: 1,
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5,
      cnt: 1,
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2,
      cnt: 1,
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8,
      cnt: 1,
    },
  ]
}
