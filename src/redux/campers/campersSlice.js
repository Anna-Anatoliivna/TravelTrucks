import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from '../../api/campersApi';

// Async actions
export const getCampers = createAsyncThunk('campers/getCampers', fetchCampers);
export const getCamperDetails = createAsyncThunk(
  'campers/getCamperDetails',
  fetchCamperById,
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    selectedCamper: null,
    filters: {},
    favorites: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    toggleFavorite(state, action) {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter(id => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      });
  },
});

export const { setFilters, toggleFavorite } = campersSlice.actions;
export default campersSlice.reducer;
