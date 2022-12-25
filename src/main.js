import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import StoreContext from './context/store'
import storeCart from './store/store-cart.js'
const store = {
  cart: storeCart,
}
const app = createRoot(document.getElementById('app'))

app.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
)
