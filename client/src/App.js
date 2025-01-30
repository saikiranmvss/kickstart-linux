import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Investors from './pages/Investors';
import Enterprenuer from './pages/Enterprenuer';
import Events from './pages/Events';
import AccountRecoveryPage from './pages/AccountRecoveryPage'
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="investors" element={<Investors />} />
          <Route path="enterprenuer" element={<Enterprenuer />} />
          <Route path="events" element={<Events />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recovery" element={<AccountRecoveryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
