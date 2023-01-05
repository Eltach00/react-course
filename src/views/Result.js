import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../hooks/useStore'
import storeCart from '../store/store-cart'

export default observer(function Result({}) {
  const [order] = useStore('order')
  const [cartStore] = useStore('cart')

  return (
    <div>
      <h1>{order.orderData.name}, yout order is done!</h1>
      <hr />
      <h3>Total: {cartStore.total}</h3>
      <Link to="/order" className="btn btn-danger">
        Back to Order
      </Link>
    </div>
  )
})
