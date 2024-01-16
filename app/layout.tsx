import type { Metadata } from 'next';
import { roboto } from './ui/fonts';
import './globals.css';
import { Providers } from './providers';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
