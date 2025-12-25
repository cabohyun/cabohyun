import './globals.css';
import Navbar from './Navbar'; 
import ScrollToTopButton from './ScrollToTopButton'; 

export const metadata = {
  title: 'CABOHYUN',
  icons: {
    icon: '/pyy.png', 
  },
  description: 'Portfólio de desenvolvimento Full-Stack de CABOHYUN.', 
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ backgroundColor: 'black', margin: 0 }}>
        <Navbar /> 
        {children} 
        <ScrollToTopButton /> 
      </body>
    </html>
  );
}