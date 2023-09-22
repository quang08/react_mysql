import axios from "axios";

//set up a reusable Axios instance for making HTTP requests to a the API
//This means that all requests made through this Axios instance will be relative to this base URL.
export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
