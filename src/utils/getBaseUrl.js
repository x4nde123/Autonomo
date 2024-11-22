import { API_URL } from "../services/setup"

export const getBaseUrl = (key) => {
  return `${API_URL}/${key}`
}