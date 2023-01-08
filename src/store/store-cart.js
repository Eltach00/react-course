import { makeAutoObservable, runInAction } from 'mobx'

export default class storeCart {
  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }
  inProcess = [] /*block buttons */
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

  cleanCart = async () => {
    const res = await this.rootStore.api.cart.clean(this.#token)
    if (res) {
      runInAction(() => {
        this.items.length = 0
      })
    }
  }

  load = async () => {
    const currentToken = this.rootStore.storage.getItem('TOKEN')
    const { cart, token, needUpdate } = await this.rootStore.api.cart.load(
      currentToken
    )

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
      this.inProcess.push(id) /*block buttons */

      const res = await this.rootStore.api.cart.add(id, this.#token)
      if (res) {
        runInAction(() => {
          this.items.push({ id, cnt: 1 })
          this.inProcess = this.inProcess.filter(
            (item) => item !== id
          ) /*block buttons */
        })
      }
    }
  }

  change = async (id, cnt) => {
    let item = this.items.find((item) => item.id == id)

    if (item !== undefined) {
      this.inProcess.push(id) /*block buttons */

      let detailts = this.detailedItem.find((item) => item.id == id)
      const newCnt = Math.max(1, Math.min(detailts.rest, cnt))

      const res = await this.rootStore.api.cart.change(id, newCnt, this.#token)

      if (res) {
        runInAction(() => {
          item.cnt = newCnt
          this.inProcess = this.inProcess.filter(
            (item) => item !== id
          ) /*block buttons */
        })
      }
    }
  }

  remove = async (id) => {
    if (this.inCart(id)) {
      this.inProcess.push(id) /*block buttons */

      const res = await this.rootStore.api.cart.remove(id, this.#token)
      if (res) {
        runInAction(() => {
          this.items = this.items.filter((pr) => pr.id !== id)
          this.inProcess = this.inProcess.filter(
            (item) => item !== id
          ) /*block buttons */
        })
      }
    }
  }

  disableButton = (id) => {
    return this.inProcess.some((item) => item == id)
  }
}
