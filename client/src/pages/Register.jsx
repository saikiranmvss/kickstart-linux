import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    postal: "",
    city: "",
    state: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit phone";
    if (!formData.postal.trim()) newErrors.postal = "ZIP Code is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccessMessage("");
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const payload = { ...formData };
        delete payload.confirmPassword;

        const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/api/user/register`,
          payload,
          { withCredentials: true }
        );

        if (res.status === 201) {
          setSuccessMessage("User registered successfully. Redirecting...");
          setTimeout(() => navigate("/login"), 2000);
        } else if (res.status === 200) {
          setServerError("User already exists. Please log in.");
        }
      } catch (err) {
        console.error("Server error:", err);
        setServerError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-1/2 banner-bg justify-center items-center hidden md:flex">
        <img
          src="../images/barath.png"
          alt="Map of Bharat"
          className="max-w-full h-auto banner-image"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-[70%]">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">Register</h2>

          {serverError && (
            <div className="text-red-600 text-sm mb-4">{serverError}</div>
          )}

          {successMessage && (
            <div className="text-green-600 text-sm mb-4">{successMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "FIRST NAME", name: "firstName", placeholder: "John" },
                { label: "LAST NAME", name: "lastName", placeholder: "Doe" },
                { label: "EMAIL ID", name: "email", placeholder: "johndoe@gmail.com", type: "email" },
                { label: "PHONE NUMBER", name: "mobile", placeholder: "9876543210", type: "tel" },
                { label: "ZIP Code", name: "postal", placeholder: "500001" },
                { label: "City", name: "city", placeholder: "Hyderabad" },
                { label: "State", name: "state", placeholder: "Telangana" },
                { label: "Country", name: "country", placeholder: "India" },
                { label: "PASSWORD", name: "password", placeholder: "Enter password", type: "password" },
                { label: "CONFIRM PASSWORD", name: "confirmPassword", placeholder: "Confirm password", type: "password" },
              ].map(({ label, name, placeholder, type = "text" }) => (
                <div key={name}>
                  <label className="block text-xs font-semibold text-gray-500 mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={`w-full px-4 py-2 border ${
                      errors[name] ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 ${
                      errors[name] ? "focus:ring-red-500" : "focus:ring-blue-500"
                    }`}
                  />
                  {errors[name] && (
                    <small className="text-red-500 text-sm mt-1 block">
                      *{errors[name]}
                    </small>
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>

          <div className="text-end mt-4">
            <Link to="/login" className="text-black text-sm font-medium">
              back to login?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
