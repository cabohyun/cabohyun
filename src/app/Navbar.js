'use client'; 
import React, { useState, useEffect } from 'react';
//Aqui só seguir o fluxo :)
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = typeof window !== 'undefined' ? window.innerHeight - 50 : 0; 

    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, 
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <nav style={{ 
      ...navStyle, 
      opacity: isVisible ? 1 : 0, 
      pointerEvents: isVisible ? 'auto' : 'none' 
    }}>
      <button onClick={() => scrollToSection('sobre-mim')} style={linkStyle}>Sobre mim</button>
      <button onClick={() => scrollToSection('projetos')} style={linkStyle}>Projetos</button>
      <button onClick={() => scrollToSection('contato')} style={linkStyle}>Contato</button>
    </nav>
  );
};

const navStyle = {
  position: 'fixed', 
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.9)', 
  padding: '20px 0',
  textAlign: 'center',
  zIndex: 1000, 
  boxShadow: '0 2px 5px rgba(255, 255, 255, 0.1)',
  transition: 'opacity 0.3s ease-in-out', 
};

const linkStyle = {
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  padding: '8px 15px',
  margin: '0 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s, color 0.3s',
};
export default Navbar; //Bye!