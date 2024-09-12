import type { Metadata } from 'next';
import './globals.css';
import HeaderDefault from '@/components/HeaderDefault';
import FooterDefault from '@/components/FooterDefault';

export const metadata: Metadata = {
  title: 'FoTick',
  description: 'FoTick',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark bg-gray-900 scroll-smooth">
      <body>
        <HeaderDefault />
        {children}
        <FooterDefault />
      </body>
    </html>
  );
}
