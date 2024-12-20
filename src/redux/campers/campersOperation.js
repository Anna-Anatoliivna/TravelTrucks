import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

// Отримати всі кемпери з фільтрами
export const fetchCampers = createAsyncThunk(
  "campers/getAll",
  async (params, thunkAPI) => {
    try {
      const { data } = await instance.get("/campers", { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

 

// Отримати деталі кемпера за ID
export const fetchCamperById = createAsyncThunk(
  'campers/getById',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
