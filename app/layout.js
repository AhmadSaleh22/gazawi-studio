// Install needed packages:
// npm install next react react-dom react-scroll-parallax

// app/layout.tsx
'use client';

import Footer from './component/Footer';
import Navbar from './component/Navbar';
import './globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ParallaxProvider>
          <Navbar />
          {children}
          <Footer />
        </ParallaxProvider>
      </body>
    </html>
  );
}

