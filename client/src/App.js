import React from 'react';
import { useEffect, useState  , useContext} from "react";
import { AuthContext } from "./context/AuthContext";
import AuthProvider from './context/AuthContext';  
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import PublicHomePage from './pages/public/HomePage';
import Journey from './pages/user-journey/JourneyHome';
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
import DefaultLayout from './components/DefaultLayout';
import PublicDefaultLayout from './components/PublicDefaultLayout';
import UserJourney from './components/UserJourney';
import axios from 'axios';
import './styles/global.css';


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("id");
  const location = useLocation();
  const { user, loading, fetchUserData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated && !user) {
      fetchUserData();
    }
  }, [isAuthenticated, user, fetchUserData]);

  if (loading) return <p>Loading...</p>;

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
    <AuthProvider> 
    <Router>
      <Routes>
        
        <Route path="/user-journey" element={<UserJourney />}>
          <Route index element={<Journey />} />
        </Route>

        <Route path="/" element={<PublicDefaultLayout />}>
          <Route index element={<PublicHomePage />} />
        </Route>

        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>}/>
        <Route path="/recovery" element={<AccountRecoveryPage />} />
        <Route path="/verify-pin" element={<VerifyPin />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/" element={<ProtectedRoute><DefaultLayout /></ProtectedRoute>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="investors" element={<Investors />} />
          <Route path="enterprenuer" element={<Enterprenuer />} />
          <Route path="events" element={<Events />} />
          <Route path="view-profile" element={<ViewProfile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
