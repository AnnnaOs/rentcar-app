import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCars, getBrands, getCarById } from './operations';

const initialState = {
  cars: [],
  brands: [],
  carCurrent: null,
  page: 1,
  totalPages: null,
  isLoading: false,
  isError: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    resetCars: state => {
      state.cars = [];
    },
    resetPage: state => {
      state.page = 1;
    },
    incrementPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const newCars = payload.cars.filter(
          car => !state.cars.some(existing => existing.id === car.id)
        );
        state.cars.push(...newCars);
        state.totalPages = payload.totalPages;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.brands = payload;
      })
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.carCurrent = payload;
      })
      .addMatcher(
        isAnyOf(getCars.pending, getBrands.pending, getCarById.pending),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(getCars.rejected, getBrands.rejected, getCarById.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload || null;
        }
      );
  },
});

export const { resetPage, resetCars, incrementPage } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
