import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXTAUTH_SECRET,
});

export default api;
