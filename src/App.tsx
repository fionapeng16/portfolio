import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <PageLoader />
          <ThemeToggle />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
