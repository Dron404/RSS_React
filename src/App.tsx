import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import FormPage from './pages/FormPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Form" element={<FormPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
