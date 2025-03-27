import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import PublicHomePage from "./pages/public/HomePage";
import Journey from "./pages/user-journey/JourneyHome";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Investors from "./pages/Investors";
import Enterprenuer from "./pages/Enterprenuer";
import Events from "./pages/Events";
import VerifyPin from "./pages/verifyPin";
import AccountRecoveryPage from "./pages/AccountRecoveryPage";
import ChangePassword from "./pages/ChangePassword";
import ViewProfile from "./pages/view-profile";
import DefaultLayout from "./components/DefaultLayout";
import PublicDefaultLayout from "./components/PublicDefaultLayout";
import UserJourney from "./components/UserJourney";
import axios from "axios";
import "./styles/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const isAuthenticated = localStorage.getItem("id");

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const App = () => {
  const [slugs, setSlugs] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state for the slugs

  useEffect(() => {
    const fetchSlugs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user-slugs`);
        if (response.status === 200) {
          const fetchedSlugs = (response.data.Slugs || []).filter(slug => slug && slug.urlSlug);
          setSlugs(fetchedSlugs); // Store slugs in state
          console.log("Fetched Slugs:", fetchedSlugs);
        }
      } catch (error) {
        console.error("Failed to fetch slugs:", error);
      } finally {
        setLoading(false); // Stop loading once API call completes
      }
    };

    fetchSlugs();
  }, []);

  // Show a loader until the slugs are fetched
  if (loading) {
    return <p></p>;
  }

  return (
    <AuthProvider>
      <ToastContainer />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicDefaultLayout />}>
            <Route index element={<PublicHomePage />} />
          </Route>

          <Route path="/user-journey" element={<UserJourney />}>
            <Route index element={<Journey />} />
          </Route>

          {/* Dynamic Slug Routes */}
          {slugs.map((slug, index) => (
            <Route path={`/${slug.urlSlug}`} element={<PublicDefaultLayout />} key={index}>
              <Route index element={<PublicHomePage />} />
            </Route>
          ))}

          {/* Auth Routes */}
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/recovery" element={<AccountRecoveryPage />} />
          <Route path="/verify-pin" element={<VerifyPin />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><DefaultLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="investors" element={<Investors />} />
            <Route path="enterprenuer" element={<Enterprenuer />} />
            <Route path="events" element={<Events />} />
            <Route path="view-profile" element={<ViewProfile />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
