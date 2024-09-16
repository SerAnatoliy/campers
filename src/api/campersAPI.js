import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async (page = 1) => {
  const data = await axios.get(`/campers/?page=${page}&limit=4`);

  return data.data.items;
};

export const getAllCampers = async () => {
  const data = await axios.get('/campers');
  console.log('data', data);
  return data.data;
};
