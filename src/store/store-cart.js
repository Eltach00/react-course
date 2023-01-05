import { makeAutoObservable } from 'mobx'

export default class storeCart {
  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  items = [
    {
      id: 100,
      cnt: 1,
    },
  ]

  get detailedItem() {
    return this.items.map((pr) => {
      const details = this.rootStore.products.getItem(pr.id)
      return { ...details, ...pr }
    })
  }

  get total() {
    return this.detailedItem.reduce((acc, pr) => (acc += pr.price * pr.cnt), 0)
  }

  inCart = (id) => {
    return this.items.some((pr) => pr.id == id)
  }

  add = (id) => {
    if (!this.inCart(id)) {
      this.items.push({ id, cnt: 1 })
    }
  }

  change = (id, cnt) => {
    let item = this.items.find((item) => item.id == id)

    if (item !== undefined) {
      let detailts = this.detailedItem.find((item) => item.id == id)
      item.cnt = Math.max(1, Math.min(detailts.rest, cnt))
    }
  }

  remove = (id) => {
    this.items = this.items.filter((pr) => pr.id !== id)
  }
}
