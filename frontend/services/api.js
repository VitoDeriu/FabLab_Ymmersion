import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api"; 

export const fetchProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects`);
  return response.data;
};

export const submitProject = async (projectData) => {
  const response = await axios.post(`${API_BASE_URL}/projects`, projectData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/login`, credentials);
  return response.data;
};
