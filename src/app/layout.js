import 'globals.css';
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton.js';

export const medata = {
    title: 'CABOHYUN',
    icons: {
        icon: '/pyy.png',
    },
    description: 'Portfólio de desenvolvimento Full-Stack de Maria Clara Carvalho.',
};

export default function RootLayout({ childen }) {
    return (
        <html lang="pt-BR">
            <body style={{ backgroundColor: 'black', margin: 0 }}>
                <Navbar />
                {childen}
                <ScrollToTopButton />
            </body>
        </html>
    );
}