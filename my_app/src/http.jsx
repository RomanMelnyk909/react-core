import axios from "axios";

const BASE_URL = "https://roman.itstep.click/";

export default axios.create({
  baseURL: BASE_URL,
  headers: "Content-Type: application/json",
  timeout: 2000,
});
