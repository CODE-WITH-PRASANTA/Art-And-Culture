import axios from "axios";

/* ✅ BASE URL */
export const BASE_URL = "http://localhost:5000";

/* ✅ IMAGE URL (VERY IMPORTANT FIX) */
export const IMG_URL = BASE_URL + "/uploads/";

/* ✅ AXIOS INSTANCE */
export const API = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true, // optional (good practice)
});

export default API;