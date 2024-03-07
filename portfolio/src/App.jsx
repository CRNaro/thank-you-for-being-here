import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutMe from './components/Pages/AboutMe'
import Contact from './components/Pages/Contact'
import Portfolio from './components/Pages/Portfolio'
import Resume from './components/Pages/Resume'
import Home from './components/Pages/Home'
// import backgroundImage from './assets/maidstonerainbow.jpg'
// import backgroundImage from './assets/bikinglake.jpg'
// import backgroundImage from './assets/atmosphere.png'
// import backgroundImage from './assets/mountaintexture.png'
import backgroundImage from './assets/skytexture.png'

function App() {
  return (
    <div style={{ backgroundColor:'rgb(245, 245, 240, 1)', height: '180vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}> 
   <Router>
    <Header />
    <div className="main-content">
     <Routes>
      {/*<Route path="/" element={ <Home />} />*/}
      <Route path="/" element={<AboutMe />} /> {/* This is the main route for my project, but i will have a home page as my real profile main route = path="/aboutme" */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
     </Router>
   <Footer />
    </div>
  );
}

export default App
