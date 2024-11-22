import axios from "axios";
import { API_URL } from "./setup";

export const api = axios.create({
  baseURL: API_URL
})
