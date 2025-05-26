import { api } from '../../configAPI/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (params = {}, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const page = params.page ?? state.cars.page ?? 1;

      const { brand, price, mileageFrom, mileageTo } = params;

      const queryParams = {
        ...(brand && { brand }),
        ...(price && { rentalPrice: price }),
        ...(mileageFrom && { minMileage: mileageFrom }),
        ...(mileageTo && { maxMileage: mileageTo }),
        page,
      };

      const { data } = await api.get('/cars', { params: queryParams });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBrands = createAsyncThunk(
  'cars/getBrands',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/brands');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  'cars/getCarById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
