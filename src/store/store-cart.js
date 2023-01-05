import { makeAutoObservable, runInAction } from 'mobx'

//tmp
const BACKEND = 'http://faceprog.ru/reactcourseapi/cart/'

export default class storeCart {
  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  items = []
  #token = null

  get detailedItem() {
    return this.items.map((pr) => {
      const details = this.rootStore.products.getItem(pr.id)
      return { ...details, ...pr }
    })
  }

  get total() {
    return this.detailedItem.reduce((acc, pr) => (acc += pr.price * pr.cnt), 0)
  }

  load = async () => {
    const currentToken = this.rootStore.storage.getItem('TOKEN')
    const response = await fetch(`${BACKEND}load.php?token=${currentToken}`)
    const { cart, token, needUpdate } = await response.json()

    if (needUpdate) {
      this.rootStore.storage.setItem('TOKEN', token)
    }
    runInAction(() => {
      this.items = cart
      this.#token = token
    })
  }

  inCart = (id) => {
    return this.items.some((pr) => pr.id == id)
  }

  add = async (id) => {
    if (!this.inCart(id)) {
      const response = await fetch(
        `${BACKEND}add.php?token=${this.#token}&id=${id}`
      )
      const res = await response.json()
      if (res) {
        this.items.push({ id, cnt: 1 })
      }
    }
  }

  change = (id, cnt) => {
    let item = this.items.find((item) => item.id == id)

    if (item !== undefined) {
      let detailts = this.detailedItem.find((item) => item.id == id)
      item.cnt = Math.max(1, Math.min(detailts.rest, cnt)
    }
  }

  remove = async (id) => {
    if (this.inCart(id)) {
      const response = await fetch(
        `${BACKEND}remove.php?token=${this.#token}&id=${id}`
      )
      const res = await response.json()
      if (res) {
        this.items = this.items.filter((pr) => pr.id !== id)
      }
    }
  }
}
