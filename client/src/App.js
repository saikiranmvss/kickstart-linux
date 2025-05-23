import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import PublicHomePage from "./pages/public/HomePage";
import Terms from "./pages/public/Terms";
import MyJourney from "./pages/public/journey/MyJourney";
import Journey from "./pages/user-journey/JourneyHome";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Investors from "./pages/Investors";
import Termspage from "./pages/Termspage";
import Enterprenuer from "./pages/Enterprenuer";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Chats from "./pages/Chats";
import VerifyPin from "./pages/verifyPin";
import AccountRecoveryPage from "./pages/AccountRecoveryPage";
import ChangePassword from "./pages/ChangePassword";
import Register from "./pages/Register";
import ViewProfile from "./pages/view-profile";
import DefaultLayout from "./components/DefaultLayout";
import PublicDefaultLayout from "./components/PublicDefaultLayout";
import UserJourney from "./components/UserJourney";
import axios from "axios";
import "./styles/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  const location = useLocation();
  const { user, isAdmin, loading, fetchUserData } = useContext(AuthContext);

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

const AdminOnly = ({ children }) => {
  const { isAdmin } = useContext(AuthContext);
  return isAdmin ? children : <Navigate to="/" replace />;
};

const App = () => {
  const [slugs, setSlugs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlugs = async () => {
      console.log(`${process.env.REACT_APP_API_BASE_URL}api/journey/user-slugs`);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/journey/user-slugs`);
        if (response.status === 200) {
          const fetchedSlugs = (response.data.Slugs || []).filter(slug => slug && slug.urlSlug);
          setSlugs(fetchedSlugs); 
        }
      } catch (error) {
        console.error("Failed to fetch slugs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlugs();
  }, []);

  
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
            <Route path="/terms" element={<Terms />}></Route>
          </Route>

          <Route path="/user-journey" element={<UserJourney />}>
            <Route index element={<Journey />} />
          </Route>

          {/* Dynamic Slug Routes */}
          {slugs.map((slug, index) => (
            <Route path={`/${slug.urlSlug}`} element={<PublicDefaultLayout method='slug' />} key={index}>
              <Route index element={<MyJourney />} />
            </Route>
          ))}

          {/* Auth Routes */}
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/recovery" element={<AccountRecoveryPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-pin" element={<VerifyPin />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><DefaultLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="investors" element={<Investors />} />
            <Route path="enterprenuer" element={<Enterprenuer />} />
            <Route path="events" element={<Events />} />
            <Route path="projects" element={<Projects />} />
            <Route path="chats" element={<Chats />} />
            <Route path="view-profile" element={<ViewProfile />} />

            <Route path="/termsPage" element={<AdminOnly><Termspage /></AdminOnly>} />

          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
