import axios from 'axios';
//@ts-ignore
const url = import.meta.env.VITE_API_URL;
console.log(url)

export const api = axios.create({
  baseURL: url,
});

