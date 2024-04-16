import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Arrvals from './components/arrivals/Arrvals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header';
import Promoaction from './components/promoaction/Promoaction';
import Sales from './components/sales/Sales';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Promoaction/>
        <Brands/>
        <Arrvals/>
        <Sales/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
