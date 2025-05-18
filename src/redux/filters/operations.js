import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAPI/api';

export const getBrands = createAsyncThunk('filters/getBrands', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/brands');
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
