import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Listings from './components/Listings';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white transition-colors duration-300 min-h-screen font-sans">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Categories />
        <Listings />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
