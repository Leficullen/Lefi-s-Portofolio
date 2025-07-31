import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto px-4'>
      <Navbar/>
      <App />
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
    <Footer/>
  </StrictMode>,
)
