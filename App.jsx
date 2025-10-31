/* File: src/App.js */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { toggleTheme } from './redux/themeSlice';
import ThemeToggle from './components/ThemeToggle';
import TopInfoBar from './components/TopInfoBar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Admissions from './components/Admissions';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <ThemeToggle onToggle={handleToggle} theme={theme} />
      <TopInfoBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;