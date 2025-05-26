import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
