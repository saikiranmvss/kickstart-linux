import { useState } from "react";
import axios from "axios";

const usePasswordValidation = () => {
  const [errors, setErrors] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validatePassword = async (email, password) => {
    if (!password) {
      setErrors("Password cannot be empty");
      setIsPasswordValid(false);
      return false;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/validate-login`, { email, password });
      if (response.status === 200) {
        localStorage.setItem('id',response.data.userData._id);
        setErrors("");
        setIsPasswordValid(true);
        return true;
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setErrors("Invalid password");
      } else {
        setErrors("An error occurred. Please try again.");
      }
      setIsPasswordValid(false);
      return false;
    }
  };

  return { validatePassword, errors, isPasswordValid, setErrors };
};

export default usePasswordValidation;
