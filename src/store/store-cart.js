import { makeAutoObservable } from 'mobx'

export default class storeCart {
  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  get total() {
    return this.products.reduce(
      (sum, prod) => (sum += prod.price * prod.cnt),
      0
    )
  }

  change = (id, cnt) => {
    let product = this.products.find((pr) => pr.id == id)

    if (product !== undefined) {
      product.cnt = Math.max(1, Math.min(product.rest, cnt))
    }
  }

  remove = (id) => {
    this.products = this.products.filter((pr) => pr.id !== id)
  }
}
