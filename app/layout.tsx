import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Evento',
    description: 'Search and find events near you',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-white bg-gray-950`}>
                <Container className="grid grid-rows-[auto,1fr,auto] min-h-screen">
                    <Header />
                    {children}
                    <Footer />
                </Container>
            </body>
        </html>
    );
}
