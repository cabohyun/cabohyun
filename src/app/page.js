'use client'; 
import React, { useState, useEffect } from 'react'; 
import Image from 'next/image';
// Vamos começar a brincadeira?! ;)
// Lembrete: altere para o que desejar, 
// só não esqueça de me dar os créditos :) #Maria Clara Carvalho ou #Cabohyun me siga nas redes ;)
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 70, 
      behavior: 'smooth'
    });
  }
};
// Veja, são esse os meus componentes das Seções
// 1. Aqui é o meu menu Secundário Visível apenas na minha seção CABOHYUN
const SecondaryNav = () => (
    <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
      <button onClick={() => scrollToSection('sobre-mim')} style={linkStyle}>Sobre mim</button>
      <button onClick={() => scrollToSection('projetos')} style={linkStyle}>Projetos</button>
      <button onClick={() => scrollToSection('contato')} style={linkStyle}>Contato</button>
    </div>
);
// 2. Aqui preparei a Seção Inicial CABOHYUN
const HeaderSection = () => (
  <section id="header" style={headerContainerStyle}>
    <h1 className="glow-animated" style={headerStyle}> 
      MARIA CLARA CARVALHO
    </h1>
    <SecondaryNav /> 
  </section>
);
// Cara, aqui eu fiz um componente de Contagem Regressiva para projetos, mas pode ser usado para qualquer coisa,
// altere para o que desejar, só não esqueça de me dar os créditos :)
const CountdownTimer = () => {
  const targetDate = new Date('January 5, 2026 08:00:00').getTime();
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds, finished: false };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());}, 1000);
      // Aqui fiz limpar o timer quando o componente é desmontado
      return () => clearTimeout(timer); });
      if (timeLeft.finished) {
        return (
        <div style={imageContainerStyle}>
          <h3 style={countdownSmallStyle}>🎉 Projeto NOVO vem conferir! 🎉</h3>
        </div>
        );
      }
      return (
      <div style={imageContainerStyle} className="glow-animated-border">
        <p style={countdownSmallStyle}>Um novo projeto:</p> 
        <p style={countdownStyle}>{timeLeft.days}D {timeLeft.hours}H</p>
        <p style={countdownStyle}>{timeLeft.minutes}M {timeLeft.seconds}S</p>
      </div>
      );
    };
    // 3. A querida e não tão complicada Seção Sobre Mim :*
    const AboutMeSection = () => (
    <section id="sobre-mim" style={sectionContainerStyle}>
      <div style={contentGridStyle}>
        <div style={cardStyle}>
          <h2>Sobre Mim</h2>
          <p style={{ marginTop: '10px' }}>
          Desenvolvedora Full-Stack com 1 ano de imersão e evolução acelerada no ecossistema de desenvolvimento web. <br />
          Sou estudante do 4º semestre de Análise e Desenvolvimento de Sistemas e possuo a capacidade comprovada de construir aplicações completas, atuando com proficiência em React.js no Front-end e Node.js no Back-end. <br />
          Minha experiência inclui dois projetos full-stack concluídos e um em desenvolvimento, demonstrando minha habilidade em integrar ponta a ponta. <br />
          <br />
          Mantenho um ritmo constante de aperfeiçoamento e busco ativamente oportunidades para aplicar minhas competências, entregar valor real e contribuir para soluções tecnológicas eficazes em um ambiente desafiador.
          </p>
        </div>
          <CountdownTimer />
      </div>
    </section>
  );
  // 4. Meus componente Reutilizável de Card de Projeto com links e botões :*
  const ProjectCard = ({ title, description, status, imageUrl, isImageLeft, websiteUrl, githubUrl }) => {
    const layoutStyle = { ...contentGridStyle, flexDirection: isImageLeft ? 'row-reverse' : 'row', };
    return (
    <div style={{ ...cardStyle, ...layoutStyle, maxWidth: '1000px', marginBottom: '40px' }}>
      {/* Meu queridinho container da Imagem com Botão */}
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={projectImageContainerLinkStyle}aria-label={`Ver código do projeto ${title} no GitHub`}>
        <Image src={imageUrl} alt={title} width={500} height={300} style={projectImageStyle} unoptimized />
        {/* Esse é o botão/overlay na Imagem */}
        <div style={imageOverlayStyle}>
          <span style={imageButtonTextStyle}>VER NO GITHUB</span>
        </div>
      </a>
      <div style={{ flex: 2, minWidth: '400px', color: 'black' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>{title}</h3>
          {/* Link do Website */}
          {websiteUrl && (
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', textDecoration: 'none', color: '#00BFFF' }}aria-label={`Acessar site do projeto ${title}`}>🌐</a>
            )}
            </div>
            <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>{description}</p>
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
              Status: <span style={{ fontWeight: 'normal' }}>{status}</span>
            </p>
        </div>
    </div>
    );
  };;
  // 5. Já deu uma canseira só de olhar, bem, aqui é a Seção Projetos :D
  const ProjectsSection = () => (
  <section id="projetos" style={sectionContainerStyle}>
    <h1 style={{ marginBottom: '40px' }}>Projetos</h1>
    {/* Projeto */}
    <ProjectCard title="FÁBIO CARVALHO IMÓVEIS (CORRETOR)" description={`Plataforma de divulgação de imóveis e captação de clientes, aplicando boas práticas de UX/UI e desenvolvimento Front-end com React. Este projeto foi desenvolvido gratuitamente para um microempreendedor, alinhado à ODS 8 (Trabalho Decente e Crescimento Econômico). Tecnologias: React.js, HTML, CSS, JavaScript.`}
    status="Finalizado! Clique no ícone da 🌐 para visitar o site."
    imageUrl="/imoveis.jpg"
    isImageLeft={false}
    websiteUrl="https://corretorfabiocarvalho.com.br/" />
  </section>
  );
  // 6. Por fim, o Footer com Contato, Links Rápidos e Redes Sociais bebê :D
  const SocialLinks = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
    {/* Container dos Ícones */}
    <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
      {/* LINKEDIN */}
      <a href="https://www.linkedin.com/in/cabohyun/" style={socialLinkStyle} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffffff">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.518-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.768 7 2.478v6.757z"/></svg>
      </a>
      {/* INSTAGRAM */}
      <a href="https://www.instagram.com/cabohyun/" style={socialLinkStyle} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffffff">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.275.148 4.772 1.637 4.97 4.84.225 3.327.225 3.731.225 7.15c0 3.204-.012 3.584-.07 4.85-.148 3.276-1.637 4.773-4.84 4.97-3.327.225-3.731.225-7.15.225-3.204 0-3.584-.012-4.85-.07-3.276-.148-4.773-1.637-4.97-4.84-.225-3.327-.225-3.731-.225-7.15 0-3.204.012-3.584.07-4.85.148-3.276 1.637-4.773 4.84-4.97 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.35 0-6.182 1.832-6.257 6.257-.058 1.28-.072 1.688-.072 4.947 0 3.259.014 3.667.072 4.947.075 4.425 1.832 6.257 6.257 6.257 1.28.058 1.688.072 4.947.072 3.259 0 3.667-.014 4.947-.072 4.425-.075 6.257-1.832 6.257-6.257.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.075-4.425-1.832-6.257-6.257-6.257-1.28-.058-1.688-.072-4.947-.072zM12 7.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622c0-2.552-2.07-4.622-4.622-4.622zM12 14.756c-1.583 0-2.756-1.173-2.756-2.756s1.173-2.756 2.756-2.756 2.756 1.173 2.756 2.756c0 1.583-1.173 2.756-2.756 2.756zM17.111 5.406c0-.501-.413-.913-.913-.913s-.913.412-.913.913.413.913.913.913.913-.412.913-.913z"/></svg>
      </a>
      {/* GITHUB */}
       <a href="https://github.com/cabohyun" style={socialLinkStyle} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#dfeaeeff">
       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.742.083-.727.083-.727 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.79 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
       </a>
       {/* GITLAB */}
       <a href="https://gitlab.com/cabohyun" style={socialLinkStyle} target="_blank" rel="noopener noreferrer" aria-label="GitLab">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffffff">
       <path d="M23.953 16.326l-1.92-5.744-1.282-3.834c-.161-.482-.572-.835-1.077-.872l-1.89-.133-1.77-5.305c-.32-.958-1.583-.958-1.903 0l-1.77 5.305-1.89.133c-.505.037-.916.39-1.077.872l-1.282 3.834-1.92 5.744c-.456 1.366.52 2.766 1.977 2.766h19.954c1.458 0 2.433-1.4 1.977-2.766zM17.5 13.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/></svg>
       </a>
     </div>
  </div>
  );
  
  const FooterContactSection = () => (
  <footer id="contato" style={footerStyle}> 
  <div style={footerGridStyle}>
    {/* Fale Comigo pelo whatsapp */}
    <div style={footerColStyle}>
      <h2 style={footerHeaderStyle}>Entre em contato</h2>
      <p style={{ marginBottom: '20px' }}>Vamos encontrar o layout perfeito para você.</p>
      <a href="https://wa.me/5521959430676" target="_blank" rel="noopener noreferrer" style={sendButtonStyle} aria-label="Enviar mensagem via WhatsApp">Enviar Mensagem</a>
    </div>
    {/* NAVEGAÇÃO RÁPIDA */}
    <div style={footerColStyle}>
      <h3 style={footerSubHeaderStyle}>NAVEGAÇÃO RÁPIDA</h3>
      <nav style={quickNavStyle}>
        <button onClick={() => scrollToSection('sobre-mim')} style={quickLinkStyle}>Sobre Mim</button>
        <button onClick={() => scrollToSection('projetos')} style={quickLinkStyle}>Projetos</button>
        <button onClick={() => scrollToSection('contato')} style={quickLinkStyle}>Contato</button>
      </nav>
    </div>
    {/* //MANTENHA CONTATO */}
    <div style={footerColStyle}>
      <h3 style={footerSubHeaderStyle}>MANTENHA CONTATO</h3>
      <SocialLinks /> 
    </div>
  </div>
  <div style={copyrightStyle}>
    &copy; 2025 Maria Clara Carvalho. Todos os direitos reservados.
  </div>
  </footer>
  );
  
  // Aqui fica o componente Principal da Landing Page
  export default function LandingPage() {
    return (
    <main style={{ color: 'white' }}>
      <HeaderSection />
      <AboutMeSection /> 
      <ProjectsSection />
      <FooterContactSection /> 
    </main>
  );
}

// MEUS ESTILOS CSS, SE PREFERIR PODE MOVER PARA UM ARQUIVO .CSS PARA MAIS ORGANIZAÇÃO ;)
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

// Meu estilos favorito do Título CABOHYUN (E se procura pelo meu .glow-animated ele está no globals.css), altere para o que desejar, só não esqueça de me dar os créditos :)
const headerStyle = {
  fontSize: '5rem', 
  fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
  fontWeight: 'bold', 
  letterSpacing: '0.1em',
  color: 'black', 
  textAlign: 'center',
};

// Aqui fica meus estilos dos Links/Botões, altere para o que desejar, só não esqueça de me dar os créditos :)
const linkStyle = {
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

// Tem também os estilos do Card "Sobre Mim" e Card de Projeto, altere para o que desejar, só não esqueça de me dar os créditos :)
const contentGridStyle = {
  display: 'flex',
  gap: '40px',
  maxWidth: '1000px', 
  alignItems: 'center',
  flexWrap: 'wrap', 
  justifyContent: 'center',
};

const cardStyle = {
  flex: 1, 
  minWidth: '400px',
  backgroundColor: 'white',
  color: 'black',
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
};

const imageContainerStyle = {
  width: '300px',
  height: 'auto',
  borderRadius: '15px',
  overflow: 'hidden',
};
// Estilo para o link e Container da imagem, altere para o que desejar, só não esqueça de me dar os créditos :)
const projectImageContainerLinkStyle = {
  flex: 1,
  minWidth: '250px',
  height: 'auto',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative', // Nesse faz posicionar o overlay queridinho :D
  cursor: 'pointer',
  display: 'block', // Aqui é para que o link ocupe o espaço :*
  textDecoration: 'none', // Aqui remove o sublinhado do link :)
};

const projectImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
  objectFit: 'cover',
};

// Estilo para o botão na imagem, altere para o que desejar, só não esqueça de me dar os créditos :)
const imageOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo escuro
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0, 
  transition: 'opacity 0.3s ease-in-out',
  pointerEvents: 'none', 
};

const imageButtonTextStyle = {
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '10px 20px',
  border: '2px solid white',
  borderRadius: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
};


// Estilos do meu Footer, altere para o que desejar, só não esqueça de me dar os créditos :)
const footerStyle = {
  backgroundColor: 'black', 
  color: 'white',
  padding: '80px 50px 20px',
  borderTop: '1px solid #ffffffff',
  minHeight: '40vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const footerGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '50px',
  maxWidth: '1200px',
  width: '100%',
  marginBottom: '40px',
};

const footerColStyle = {
  padding: '0 10px',
};

const footerHeaderStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const footerSubHeaderStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#8B0000', 
  marginBottom: '15px',
};

const sendButtonStyle = {
  backgroundColor: 'white', 
  color: 'black',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'opacity 0.2s',
};

const quickNavStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const quickLinkStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  textAlign: 'left',
  padding: '5px 0',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.2s',
  textDecoration: 'none',
  fontSize: '1rem',
};

const contactDetailStyle = {
  fontSize: '1rem',
};

const socialLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const copyrightStyle = {
  marginTop: '40px',
  fontSize: '0.8rem',
  color: '#888',
  textAlign: 'center',
  width: '100%',
};
const countdownStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#8B0000',
  textAlign: 'center',
  marginTop: '20px',
};

const countdownSmallStyle = {
  fontSize: '1rem',
  color: '#ffffffff',
  textAlign: 'center',
  marginTop: '10px',
};

// Obrigada por visitar meu portfólio :* Deus te abençoe!!