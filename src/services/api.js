import axios from "axios";

const apiCodeBurguer = axios.create({
  baseURL: "http://localhost:3001",
});

apiCodeBurguer.interceptors.request.use(async (config) => {
  const userDate = await localStorage.getItem("codeburguer:userData");
  const token = userDate && JSON.parse(userDate).token;
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default apiCodeBurguer;
