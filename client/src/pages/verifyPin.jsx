import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyPin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [errors, setErrors] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPin = pin.join("");

    if (fullPin.length !== 6) {
      setErrors("Enter a 6-digit PIN");
      return;
    }

    setErrors("");

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/validate-pin`, { pin: fullPin }, { withCredentials: true })
      .then((data) => {
        if(data.status==200){
          navigate('/change-password')
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Form submitted:", { fullPin });
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="md:w-1/2 banner-bg flex flex-col justify-center items-center hidden md:flex">
        <img
          src="../images/barath.png"
          alt="Map of Bharat"
          className="max-w-full h-auto banner-image"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
            Verify PIN
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-left">
            Enter the 6-digit PIN sent to your email
          </p>

          {/* PIN Input Fields */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-center space-x-2">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-10 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            {errors && (
              <small className="text-red-500 text-sm mt-1 block text-center">
                *{errors}
              </small>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition"
            >
              VERIFY PIN
            </button>
          </form>

          <div className="text-end mt-2 flex justify-between">
            <a href="#" className="text-blue-500">Re-send Code</a>
            <Link to="/login" className="text-black text-sm font-medium">
              Back to login?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPin;
