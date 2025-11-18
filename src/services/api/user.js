// src/services/api/endpoints.js
import apiInstance from "./index";

// POST: Tương tự
export const login = async (userData) => {
  const response = await apiInstance.post("/auth/login", userData);
  return response;
};

export const createRegister = async (userData) => {
  const response = await apiInstance.post("/auth/register", userData);
  return response;
};

export const getMe = async () => {
  const response = await apiInstance.get("/auth/me");
  return response;
};

export const getDataUser = async () => {
  const response = await apiInstance.get("/users");
  return response;
};

export const deleteUser = async (userId) => {
  const response = await apiInstance.delete(`/users/${userId}`);
  return response;
};