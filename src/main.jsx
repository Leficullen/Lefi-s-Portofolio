import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/footer.jsx'
import Loading from './components/Loading.jsx'

import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loading/>
    <div className='container mx-auto px-4 overflow-x-hidden'>
      <Navbar/>
      <App />
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
    <Footer/>
  </StrictMode>,
)
