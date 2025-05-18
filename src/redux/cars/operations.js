import { api } from '../../configAPI/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCars = createAsyncThunk('cars/getCars', async (params, { rejectWithValue }) => {
  try {
    const { brand, price, mileageFrom, mileageTo, page = 1 } = params;

    const { data } = await api.get('/cars', {
      params: { brand, price, mileageFrom, mileageTo, page },
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getCarById = createAsyncThunk('cars/getCarById', async (id, { rejectWithValue }) => {
  try {
    const { data } = await api.get(`/cars/${id}`);
    console.log('✅ Received data from API:', data);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
