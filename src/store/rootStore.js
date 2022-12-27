import storeCart from './store-cart'
import storeOrder from './store-order'
import storeProducts from './store-products'

export default class RootStore {
  constructor() {
    this.products = new storeProducts(this)
    this.cart = new storeCart(this)
    this.order = new storeOrder(this)
  }
}
