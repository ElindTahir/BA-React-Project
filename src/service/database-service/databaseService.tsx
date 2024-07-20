import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const getItems = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
};

const restoreCSV = async () => {
  const response = await axios.post(`${API_URL}/restore-csv`);
  return response.data;
};

const deleteAllItems = async () => {
  const response = await axios.delete(`${API_URL}/items`);
  return response.data;
};

const delete100Items = async () => {
  const response = await axios.delete(`${API_URL}/items/delete100`);
  return response.data;
};

const add100Items = async () => {
  const response = await axios.post(`${API_URL}/items/add100`);
  return response.data;
};

export default {
  getItems,
  restoreCSV,
  deleteAllItems,
  delete100Items,
  add100Items,
};
