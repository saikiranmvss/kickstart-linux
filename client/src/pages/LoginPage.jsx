import React, { useState } from "react";
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailError = "";

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      emailError = "Enter Valid Email ID";
    }

    setErrors(emailError);

    if (!emailError) {
      axios
      .post('http://localhost:5000/api/validate-email ',{email:email})
      .then((data)=>{
        console.log(data.status);
        if(data.data.message=='Email exists'){
          setPasswordShow(true)
        }
      })
      .catch((error)=>{
        if(error.status==404){
          setErrors('No email found');
        }
      })
      console.log("Form submitted:", { email });
    }
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-1/2 bg-blue-500 flex flex-col justify-center items-center hidden md:flex">
        <img
          src="../images/barath.png"
          alt="Map of Bharat"
          className="max-w-full h-auto w-100"
        />        
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
            Welcome back!
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-left">
            Please login using your authorised email ID
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-500 mb-2"
              >
                ENTER EMAIL ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 border ${
                  errors ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
                placeholder="Kumar@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors && (
                <small className="text-red-500 text-sm mt-1 block">
                  *{errors}
                </small>
              )}
            </div>
            {passwordShow && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-500 mb-2"
              >
                ENTER PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full px-4 py-2 border ${
                  errors ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors && (
                <small className="text-red-500 text-sm mt-1 block">
                  *{errors}
                </small>
              )}
            </div>
          )}
            <button
              type="submit"
              className="login-button w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition"
            >
              NEXT
            </button>
          </form>
          <div className="text-center mt-4">
          <Link to="/forgot-email" className="text-black text-sm font-medium">
          Forgot your email ID?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
