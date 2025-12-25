'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 70,
      behavior: 'smooth'
    });
  }
};

const SecondaryNav = () => (
  <div style={{ display: 'flex', gap: '20px', marginTop: '40px'}}>
    <button onClick={() => scrollToSection('sobre-mim')} style={linkStyle}>Sobre mim</button>
    <button onClick={() => scrollToSection('projetos')} style={linkStyle}>Projetos</button>
    <button onClick={() => scrollToSection('contato')} style={linkStyle}>Contato</button>
  </div>
);

const HeaderSection = () => (
  <section id="header" style={headerContainerStyle}>
    <h1 className="glow-animated" style={headerStyle}> 
      MARIA CLARA CARVALHO
    </h1>
    <SecondaryNav />
  </section>
);

const headerContainerStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '100px',
};

const sectionContainerStyle = {
  padding: '100px 50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
};

const headerStyle = {
  fontSize: '5rem', 
  fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
  fontWeight: 'bold', 
  letterSpacing: '0.1em',
  color: 'black', 
  textAlign: 'center',
};

const linkStyle = {
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};