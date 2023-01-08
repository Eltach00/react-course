import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../hooks/useStore'
import ProductCard from '../components/ProductCard'

export default observer(function Home({}) {
  const [productsStore] = useStore('products')
  const [cartStore] = useStore('cart')
  const { products } = productsStore
  const { inCart, add, remove, disableButton } = cartStore
  return (
    <div className="container">
      <h1>Catalog</h1>
      <div className="row">
        {products.map((pr) => {
          return (
            <div className="col col-4 mt-3" key={pr.id}>
              <ProductCard
                product={pr}
                add={add}
                remove={remove}
                inCart={inCart(pr.id)}
                pending={disableButton(pr.id)}
              />
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
})
