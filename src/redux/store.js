import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/campersSlice';
import { filtersReducer } from './filters/slice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});

