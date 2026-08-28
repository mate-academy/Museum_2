import React, { useEffect } from 'react';
import MainLayout from '@components/layout/MainLayout/MainLayout';
import LandingHomeBlock from '@components/layout/MainLayout/LandingSection/LandingHomeBlock/LandingHomeBlock';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <main className="home">
        <LandingHomeBlock />
      </main>
    </MainLayout>
  );
};

export default Home;
