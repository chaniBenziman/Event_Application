import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events'; // שנה לכתובת ה-API שלך

export const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getEventById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
