import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Main Layout Component
 * Author: midasgao
 * Date: 2026-02-13
 */

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
