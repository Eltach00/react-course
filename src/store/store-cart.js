import { makeAutoObservable } from 'mobx'

export default class storeCart {
  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  items = []

  get total() {
    const { products } = this.rootStore.products

    this.items.forEach((el) =>
      products.forEach((pr) => {
        if (el.id === pr.id) {
          el.price = pr.price
        }
      })
    )
    return this.items.reduce((acc, el) => (acc += el.price * el.cnt), 0)
  }

  add = (product) => {
    this.items.push(product)
  }
  // change = (id, cnt) => {
  //   let product = this.products.find((pr) => pr.id == id)

  //   if (product !== undefined) {
  //     product.cnt = Math.max(1, Math.min(product.rest, cnt))
  //   }
  // }

  // remove = (id) => {
  //   this.products = this.products.filter((pr) => pr.id !== id)
  // }
}
