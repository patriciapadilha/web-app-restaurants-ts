import axios from 'axios';

const api = axios.create({
  baseURL: 'https://605d074f9386d200171ba209.mockapi.io/api/v1',
});

const getRestaurants = async () => {
  const response = api.get('/restaurants?page=1&limit=10')
    .then((returnData) => {
      const result = returnData.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getRestaurantById = async (id: number) => {
  const response = api.get(`/restaurants/${id}`)
    .then((returnData) => {
      const result = returnData.data;
      return result;
    })
    .catch(() => false);
  return response;
};



export {
  getRestaurants,
  getRestaurantById,
}