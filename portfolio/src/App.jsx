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

//

function App() {
  return (
    <div style={{ backgroundColor:'rgb(245, 245, 240, 1)', height: '100vh' }}> 
   <Router>
    <Header />
    <div className="main-content">
     <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
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
