import { Outlet } from 'react-router-dom';
import {  Footer, Navbar } from '../../ui';



export const CharactersRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
        
        <Footer />
      </div>
    </>
  );
};
