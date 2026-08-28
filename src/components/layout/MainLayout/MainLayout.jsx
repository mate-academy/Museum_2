import React, { useState, lazy, Suspense } from 'react';
import Header from '../Header/Header';

const SideMenu = lazy(() => import('@components/ui/SideMenu/SideMenu'));

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main-layout">
      <Header variant="main" onOpen={() => setIsMenuOpen(true)} />
      <Suspense fallback={null}>
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </Suspense>
      {children}
    </div>
  );
};

export default MainLayout;
