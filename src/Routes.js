import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Home from './page/Home/Home';
import Contato from './page/Contato/Contato';
import Page404 from './Page404';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
