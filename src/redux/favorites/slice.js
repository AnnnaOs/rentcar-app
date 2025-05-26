import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const car = payload;
      if (!car || !car.id) return;

      const index = state.cars.findIndex(item => item?.id === car.id);
      if (index !== -1) {
        state.cars.splice(index, 1);
      } else {
        state.cars.push(car);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
