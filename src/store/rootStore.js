import storeCart from './store-cart'
import storeOrder from './store-order'

export default class RootStore {
  constructor() {
    this.cart = new storeCart()
    this.order = new storeOrder()
  }
}
