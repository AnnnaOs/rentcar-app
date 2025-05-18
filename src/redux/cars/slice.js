import { createSlice } from '@reduxjs/toolkit';
import { getCars, getCarById } from './operations';

const initialState = {
  cars: [],
  carCurrent: null,
  isLoading: false,
  isError: null,
  page: 1,
  totalCars: null,
  totalPages: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    resetCars: state => {
      state.cars = [];
      state.page = 1;
      state.totalCars = null;
      state.totalPages = null;
    },
    incrementPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.page === 1) {
          state.cars = payload.cars;
        } else {
          state.cars.push(...payload.cars);
        }
        state.totalCars = payload.totalCars;
        state.totalPages = payload.totalPages;
      })
      .addCase(getCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getCarById.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.carCurrent = payload;
      })
      .addCase(getCarById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { resetCars, incrementPage } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
