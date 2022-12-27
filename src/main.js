import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import StoreContext from './context/store'
import RootStore from './store/rootStore.js'

const store = new RootStore()
const app = createRoot(document.getElementById('app'))

app.render(
  <BrowserRouter>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </BrowserRouter>
)
