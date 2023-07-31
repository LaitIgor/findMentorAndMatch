import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import { LanguageProvider } from './Providers/LanguageProvider.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>
)
