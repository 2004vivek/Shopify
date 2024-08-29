import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContextProvider from './context/AppContext.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
      <Toaster position="bottom-center"
  reverseOrder={false}/>
    </AppContextProvider>
    </BrowserRouter>
  
)
