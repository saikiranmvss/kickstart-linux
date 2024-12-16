import React, { useState } from 'react';
import FormField from '../components/FormField';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) formErrors.email = "Email is required.";
    if (!password) formErrors.password = "Password is required.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div className="container loginContainer">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card shadow-sm mt-5">
          <div className="card-body">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <button type="submit" className="btn btn-dark w-100">Login</button>
            </form>
            <div className="text-center mt-3">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
