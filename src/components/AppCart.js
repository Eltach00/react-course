import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../hooks/useStore'

export default observer(function AppCart() {
  const [cart] = useStore('cart')

  return (
    <div className="col col-1">
      <strong>In cart: </strong>
      {cart.total} RUB
    </div>
  )
})
