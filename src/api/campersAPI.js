import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async (page = 1) => {
  const data = await axios.get(`/campers/?page=${page}`);
  console.log(data.data.items);
  return data.data.items;
};

export const getAllCampers = async () => {
  const data = await axios.get();
  return data.data;
};
