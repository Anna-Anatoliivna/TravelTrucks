import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from '../../redux/campers/campersOperation';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: {
      items: [],
      total: 0,
    },
    isLoading: false,
    loaded: false,
    favoriteCampers: [],
    choosenCamper: null,
    error: null,
  },
  reducers: {
    setFavoriteCampers(state, { payload }) {
      if (state.favoriteCampers.includes(payload)) {
        state.favoriteCampers = state.favoriteCampers.filter(
          id => id !== payload,
        );
      } else state.favoriteCampers.push(payload);
    },
    setInitialCampers(state) {
      state.campers.items = [];
    },
    setChoosenCamper(state, { payload }) {
      state.choosenCamper = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.campers.items = [...state.campers.items, ...payload.items];
        state.campers.total = payload.total;
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, state => {
        state.error = 'No results for this request.';
        state.isLoading = false;
      });
  },
});

export const { setFavoriteCampers, setInitialCampers, setChoosenCamper } =
  campersSlice.actions;
export default campersSlice.reducer;
