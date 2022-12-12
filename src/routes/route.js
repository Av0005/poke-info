// route.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResults from '../pages/SearchResults';
import Home from '../components/SearchInput';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchResults />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
