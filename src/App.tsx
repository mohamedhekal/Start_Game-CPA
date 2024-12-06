import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AdsList } from './pages/AdsList';
import { OfferDetails } from './pages/OfferDetails';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ads" element={<AdsList />} />
          <Route path="/offer/:id" element={<OfferDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;