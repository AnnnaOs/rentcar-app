import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const exists = state.cars.some(car => car.id === payload.id);
      if (exists) {
        state.cars = state.cars.filter(car => car.id !== payload.id);
      } else {
        state.cars.push(payload);
      }
      localStorage.setItem('favorites', JSON.stringify(state.cars));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
