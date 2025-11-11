// src/services/api/endpoints.js
import apiInstance from "./index";

// POST: Tương tự
export const getDataBlog = async (userData) => {
  const response = await apiInstance.get("/posts", userData);
  return response;
};

export const createBlog = async (userData) => {
  const response = await apiInstance.post("/posts", userData);
  return response;
};

export const deleteBlog = async (id) => {
  const response = await apiInstance.delete(`/posts/${id}`);
  return response;
};

export const updateBlog = async (id, userData) => {
  const response = await apiInstance.put(`/posts/${id}`, userData);
  return response;
};

export const getDetailBlog = async (id) => {
  const response = await apiInstance.get(`/posts/${id}`);
  return response;
};
