import { createSlice } from '@reduxjs/toolkit';
import { getBrands } from './operations';

const initialState = {
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
  brands: [],
  isLoading: false,
  isError: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setMileageFrom: (state, action) => {
      state.mileageFrom = action.payload;
    },
    setMileageTo: (state, action) => {
      state.mileageTo = action.payload;
    },
    resetFilters: state => {
      state.brand = '';
      state.price = '';
      state.mileageFrom = '';
      state.mileageTo = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBrands.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { setBrand, setPrice, setMileageFrom, setMileageTo, resetFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
