import type { Metadata } from 'next';
import './globals.scss';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: 'Olivia Houlihan — Software Engineer',
  description: 'Personal site and resume for Olivia Houlihan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}


