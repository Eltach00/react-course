import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'

const app = createRoot(document.getElementById('app'))

app.render(<App />)
