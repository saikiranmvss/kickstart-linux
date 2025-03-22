import { useState } from "react";
import axios from "axios";

const useEmailValidation = () => {
  const [errors, setErrors] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = async (email) => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrors("Enter a valid Email ID");
      setIsValidEmail(false);
      return false;
    }
    
    try {
      const response = await axios.post(`/api/validate-email`, { email });
      if (response.data.message === "Email exists") {
        setErrors("");
        setIsValidEmail(true);
        return true;
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setErrors("No email found");
      } else {
        setErrors("An error occurred. Please try again.");
      }
      setIsValidEmail(false);
      return false;
    }
  };

  return { validateEmail, errors, isValidEmail, setErrors };
};

export default useEmailValidation;
