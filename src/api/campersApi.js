import axios from 'axios';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

// Отримати всі кемпери з фільтрами
export const fetchCampers = async params => {
  const response = await axios.get(API_URL, { params });
  console.log(response.data);
  
  return response.data;
};

// Отримати деталі кемпера за ID
export const fetchCamperById = async id => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
