import axios from 'axios';

const strapiBase = (import.meta.env.VITE_STRAPI_BASE_URL ?? '').replace(/\/$/, '');
const strapiToken = (import.meta.env.VITE_STRAPI_BEARER_TOKEN ?? '').trim();

export const axiosClient = axios.create({
  baseURL: strapiBase,
  headers: {
    'Content-Type': 'application/json',
    ...(strapiToken ? { Authorization: `Bearer ${strapiToken}` } : {}),
  },
});
