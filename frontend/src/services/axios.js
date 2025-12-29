// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000/api", 
//   withCredentials: true,// change to your backend URL
// });

// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // if you use token
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default API;


// name=services/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // use localhost (not 127.0.0.1)
  withCredentials: true, // necessary for Sanctum cookies
  // (axios defaults use xsrfCookieName: 'XSRF-TOKEN', xsrfHeaderName: 'X-XSRF-TOKEN')
});

export default API;