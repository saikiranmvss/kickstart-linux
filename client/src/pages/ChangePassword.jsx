import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const validatePassword = (password) => {
    const hasNumberOrSymbol = /[0-9!@#$%^&*]/.test(password);
    const isLongEnough = password.length >= 8;
    const isNotEmail = !password.includes("@") || !password.includes(".");

    if (!isLongEnough) return "Too short";
    if (!hasNumberOrSymbol) return "Weak (add number/symbol)";
    if (!isNotEmail) return "Cannot be an email";
    return "Strong";
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(validatePassword(newPassword));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMsg = "";

    if (password !== confirmPassword) {
      errorMsg = "Passwords do not match";
    } else if (passwordStrength !== "Strong") {
      errorMsg = "Password is not strong enough";
    }

    setErrors(errorMsg);
    
    if (!errorMsg) {
      axios
        .post("http://localhost:5000/api/change-password", { password }, { withCredentials: true })
        .then((response) => {
          if (response.status === 200) {
            navigate("/success");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-1/2 banner-bg flex flex-col justify-center items-center hidden md:flex">
        <img
          src="../images/barath.png"
          alt="Map of Bharat"
          className="max-w-full h-auto banner-image"
        />        
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
            Setup a new password
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-left">
            Please create a strong password
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                ENTER PASSWORD
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 border ${
                  errors ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
                placeholder="Enter new password"
                value={password}
                onChange={handlePasswordChange}
              />
              <small className={
                passwordStrength === "Strong" ? "text-green-500" : "text-red-500"
              }>
                {passwordStrength}
              </small>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                RE-ENTER PASSWORD
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 border ${
                  errors ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors && (
                <small className="text-red-500 text-sm mt-1 block">*{errors}</small>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition"
            >
              Save
            </button>
          </form>
          <div className="text-end mt-4">
            <Link to="/login" className="text-black text-sm font-medium">
              Back to login?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
