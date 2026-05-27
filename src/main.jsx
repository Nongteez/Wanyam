import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import favicon from './assets/Logo/WANYAM-LOGO-GAME.png'

const faviconLink = document.querySelector('link[rel="icon"]')
if (faviconLink) {
  faviconLink.href = favicon
  faviconLink.type = 'image/png'
} else {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  link.href = favicon
  document.head.appendChild(link)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
