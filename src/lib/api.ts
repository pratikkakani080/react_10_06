import axios from "axios";
import { getItem } from "../utils/storage";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
//   timeout: 5000,
  headers: { "X-Custom-Header": "foobar", Authorization: 'Bearer ' + getItem('token') },
});

export default instance