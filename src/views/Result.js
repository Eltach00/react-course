import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../hooks/useStore'

export default observer(function Result({}) {
  const [order] = useStore('order')
  return (
    <div>
      <h1>{order.lastCache.name}, your order is done!</h1>
      <hr />
      <h3>Total: {order.lastCache.total}</h3>
      <Link to="/order" className="btn btn-danger">
        Back to Order
      </Link>
    </div>
  )
})
