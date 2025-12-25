// Geralmente eu gosto de fazer esse primeiro pois é o que me da mais trabalho hehe
'use client';
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
     // 1. Função de rolagem: Que volta a página para o topo
    const scrollToTop = () => {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
    };
    // 2. Efeito para monitorar a rolagem e mostrar/esconder o botão
    useEffect(() => {
        // O botão aparece depois de rolar 500 pixels
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
         };
         window.addEventListener('scroll', toggleVisibility);
         return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
  <button onClick={scrollToTop} style={{ ...buttonStyle, opacity: isVisible ? 1 : 0 }} aria-label="Voltar ao Topo">↑</button>
  );
};
// Estilos do botão
const buttonStyle = {
  position: 'fixed', // Fica fixo na tela
  bottom: '30px', // Distância da parte inferior
  right: '30px', // Distância do lado direito
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fundo semi-transparente
  color: 'white',
  border: '1px solid white',
  borderRadius: '50%', // Transforma em círculo :D isso é legal kkk
  width: '50px',
  height: '50px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  zIndex: 999, // Abaixo do Navbar, mas acima do conteúdo da página >.<
  transition: 'opacity 0.3s ease-in-out', // Transição suave para aparecer/sumir
  pointerEvents: 'auto', // Sempre clicável (mesmo se opacity for 0)
};
export default ScrollToTopButton; // Isso aqui sempre me pega, acho o máximo dar esse comando no final hehe :D