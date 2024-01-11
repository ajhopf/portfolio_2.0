import type { Metadata } from 'next';
import { roboto } from './ui/fonts';
import './globals.css';
import Header from './ui/header/header';

export const metadata: Metadata = {
  title: 'André Hopf',
  description: 'André Hopf portfolio'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
