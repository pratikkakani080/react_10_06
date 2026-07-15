import axios from "axios";
import { getItem } from "../utils/storage";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
//   timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = 'Bearer ' + getItem('token') || 'token'
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response);
    
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance