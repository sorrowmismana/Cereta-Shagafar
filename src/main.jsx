import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TransitionProvider } from './components/Transition/Transition.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TransitionProvider>
        <App />
    </TransitionProvider>
  </BrowserRouter>,
)
