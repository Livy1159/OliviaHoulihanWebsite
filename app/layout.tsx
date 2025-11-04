import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Olivia Houlihan — Software Engineer',
  description: 'Personal site and resume for Olivia Houlihan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


