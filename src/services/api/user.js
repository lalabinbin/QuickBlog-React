// src/services/api/endpoints.js
import apiInstance from './index';

// POST: Tương tự
export const createLogin = async (userData) => {
  const response = await apiInstance.post('/auth/login', userData);
  return response;
};

export const createRegister = async (userData) => {
  const response = await apiInstance.post('/auth/register', userData);
  return response;
};