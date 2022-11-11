import React from 'react'
import { createRoot } from 'react-dom/client'
import UdemyApp from './udemyApp.js'

const app = createRoot(document.getElementById('app'))

app.render(<UdemyApp />)
