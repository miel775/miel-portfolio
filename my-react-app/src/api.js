// src/api.js
export const STRAPI_URL = (typeof globalThis !== 'undefined' && globalThis.process && globalThis.process.env && globalThis.process.env.REACT_APP_STRAPI_URL) || 'http://localhost:1337';