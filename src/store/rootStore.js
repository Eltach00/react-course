import storeCart from './store-cart'
import storeOrder from './store-order'
import storeProducts from './store-products'
import * as product from '../api/productApi'
import * as cart from '../api/cartApi'

export default class RootStore {
  constructor() {
    this.storage = window.localStorage
    this.api = { product, cart }
    this.products = new storeProducts(this)
    this.cart = new storeCart(this)
    this.order = new storeOrder(this)
  }
}
