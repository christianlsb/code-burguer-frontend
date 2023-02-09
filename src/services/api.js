import axios from "axios";

const apiCodeBurguer = axios.create({
  baseURL: "http://localhost:3001",
});

export default apiCodeBurguer;
