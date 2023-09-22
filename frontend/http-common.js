import axios from "axios";

//set up a reusable Axios instance for making HTTP requests to a the API

export default axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});
