import axios from "axios";

// Set base URL for all API requests
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

// Add Authorization header to every request
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration and refresh token logic
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 403) {
      console.log("Access token expired. Attempting to refresh...");

      try {
        const refreshResponse = await axios.post("/api/tokens/refresh-token", {}, { withCredentials: true });

        if (refreshResponse.status === 200) {
          const newAccessToken = refreshResponse.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);

          // Update Axios default header
          axios.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

          // Retry the original request
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axios(error.config);
        }
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/login"; // Redirect to login if refresh fails
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
