import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useEmailValidation from "../hooks/useEmailValidation";
import usePasswordValidation from "../hooks/usePasswordValidation";
import { signInWithGoogle } from "../firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const { validateEmail, errors: emailErrors } = useEmailValidation();
  const { validatePassword, errors: passwordErrors } = usePasswordValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordShow) {
      const isPasswordValid = await validatePassword(email, password);
      if (isPasswordValid) {
        navigate("/dashboard");
      }
    } else {
      const isValidEmail = await validateEmail(email);
      if (isValidEmail) {
        setPasswordShow(true);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const user = await signInWithGoogle();

    if (user) {
      const userData = {
        email: user.email,
        name: user.displayName,
        googleId: user.uid,
      };

      try {
       
        const response = await fetch("http://localhost:5000/api/signup-google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

       
        if (data.message === "User already exists") {
          localStorage.setItem('id', data.user._id); 
          navigate("/dashboard"); 
        } else if (data.message === "User created successfully") {
          localStorage.setItem('id', data.user._id); 
          navigate("/dashboard"); 
        }
      } catch (error) {
        console.error("Error sending Google user data:", error);
      }
    }
  };
  

  return (
    <div className="flex min-h-screen">
      <div className="md:w-1/2 banner-bg flex flex-col justify-center items-center hidden md:flex">
        <img src="../images/barath.png" alt="Map of Bharat" className="max-w-full h-auto banner-image" />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">Welcome back!</h2>
          <p className="text-sm text-gray-500 mb-6 text-left">Please login using your authorised email ID</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-2">ENTER EMAIL ID</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 border ${emailErrors ? "border-red-500" : "border-gray-300"} rounded-md`}
                placeholder="Kumar@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailErrors && <small className="text-red-500 text-sm mt-1 block">*{emailErrors}</small>}
            </div>
            {passwordShow && (
              <div className="mb-4">
                <label htmlFor="password" className="block text-xs font-semibold text-gray-500 mb-2">ENTER PASSWORD</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full px-4 py-2 border ${passwordErrors ? "border-red-500" : "border-gray-300"} rounded-md`}
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordErrors && <small className="text-red-500 text-sm mt-1 block">*{passwordErrors}</small>}
              </div>
            )}
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition">NEXT</button>
          </form>
          <div className="text-center mt-4">
            <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600 transition">Sign in with Google</button>
          </div>
          <div className="text-center mt-4">
            <Link to="/recovery" className="text-black text-sm font-medium">Forgot your password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
