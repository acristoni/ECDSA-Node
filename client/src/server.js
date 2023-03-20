import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.API_URL,
});

export default server;
