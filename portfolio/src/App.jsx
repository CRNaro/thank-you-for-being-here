import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutMe from './components/Pages/AboutMe'
import Contact from './components/Pages/Contact'




function App() {
  return (
    <div style={{ backgroundColor:'rgb(245, 245, 240, 1)', height: '100vh' }}>
   <Router>
    <Header />
     <Routes>
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      {/*<Route path="/" element={<Portfolio />} />
      <Route path="/" element={<Resume />} /> 
      <Route path="/" element={<Home />} /> */}
      </Routes>
     </Router>
   <Footer />
    </div>
  );
}

export default App
