import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="w-full bg-blue-600 text-white py-4 text-center text-2xl font-semibold shadow-md">
        Welcome to Our Platform
      </header>
      
      <main className="max-w-3xl bg-white p-6 rounded-2xl shadow-lg mt-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Discover Amazing Features</h2>
        <p className="text-gray-600 text-lg mb-6">
          Our platform provides seamless experiences with intuitive navigation, modern design,
          and powerful features. Join us today to explore more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-4 bg-gray-200 rounded-lg shadow">✔️ Fast & Secure</div>
          <div className="p-4 bg-gray-200 rounded-lg shadow">📱 Mobile Friendly</div>
          <div className="p-4 bg-gray-200 rounded-lg shadow">🚀 Performance Optimized</div>
          <div className="p-4 bg-gray-200 rounded-lg shadow">🔒 Secure Authentication</div>
        </div>
        <Link to="/login">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700">
            Login to Get Started
          </button>
        </Link>
      </main>
      
      <footer className="w-full text-center py-4 text-gray-600 mt-6">
        &copy; {new Date().getFullYear()} Our Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;