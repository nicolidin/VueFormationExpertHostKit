import axios from 'axios';

const strapiBase = (import.meta.env.VITE_STRAPI_BASE_URL ?? '').replace(/\/$/, '');
const strapiToken = (import.meta.env.VITE_STRAPI_BEARER_TOKEN ?? '').trim();

/**
 * Client axios pour appeler Strapi directement (pas de proxy).
 * Base URL via VITE_STRAPI_BASE_URL, token optionnel via VITE_STRAPI_BEARER_TOKEN (dev).
 */
export const axiosClient = axios.create({
  baseURL: strapiBase,
  headers: {
    'Content-Type': 'application/json',
    ...(strapiToken ? { Authorization: `Bearer ${strapiToken}` } : {}),
  },
});
