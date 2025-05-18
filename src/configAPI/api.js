import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

// // API endpoints
// export const fetchCars = async (page = 1, limit = 12) => {
//   const response = await api.get(`/cars?page=${page}&limit=${limit}`);
//   return response.data;
// };

// export const fetchCarById = async id => {
//   const response = await api.get(`/cars/${id}`);
//   return response.data;
// };

// export const fetchCarBrands = async () => {
//   const response = await api.get('/cars/brands');
//   return response.data;
// };

// export const fetchFilteredCars = async (filters, page = 1, limit = 12) => {
//   const { brand, price, mileageFrom, mileageTo } = filters;

//   let url = `/cars?page=${page}&limit=${limit}`;

//   if (brand) {
//     url += `&make=${brand}`;
//   }

//   if (price) {
//     url += `&rentalPrice=${price}`;
//   }

//   // Mileage filtering needs to be handled on client side as API doesn't support range
//   // We'll filter by mileage in the Redux slice after getting response

//   const response = await api.get(url);
//   return response.data;
// };

// // Create a booking
// export const createBooking = async bookingData => {
//   // This is a placeholder as the API doesn't have a real booking endpoint
//   // In a real application, we would send a POST request with the booking data
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ success: true, message: 'Booking successful!' });
//     }, 1000);
//   });
// };

// export default api;
