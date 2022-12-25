import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from './hooks/useStore'
import storeCart from './store/store-cart'

export default observer(function Result({ onPrev }) {
  const [order] = useStore('order')

  return (
    <div>
      <h1>{order.orderData.name}, yout order is done!</h1>
      <hr />
      <h3>Total: {storeCart.total}</h3>
      <button className="btn btn-danger" onClick={onPrev}>
        Back to Order
      </button>
    </div>
  )
})
