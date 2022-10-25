import axios from "axios";

export default axios.create({
  withCredentials: true,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
});
