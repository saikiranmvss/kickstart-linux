import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Investors from './pages/Investors';
import Enterprenuer from './pages/Enterprenuer';
import Events from './pages/Events';
import VerifyPin from './pages/verifyPin';
import AccountRecoveryPage from './pages/AccountRecoveryPage';
import ChangePassword from './pages/ChangePassword';
import ViewProfile from './pages/view-profile';
import './styles/global.css';


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('id');
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('id');

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route index element={<HomePage />} />
        <Route path="/recovery" element={<AccountRecoveryPage />} />
        <Route path="/verify-pin" element={<VerifyPin />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DefaultLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="investors" element={<Investors />} />
          <Route path="enterprenuer" element={<Enterprenuer />} />
          <Route path="events" element={<Events />} />
          <Route path="view-profile" element={<ViewProfile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
