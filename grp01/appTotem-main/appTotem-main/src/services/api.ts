import axios from "axios";

const baseUrl = "https://sistemaatendimento.onrender.com";

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
