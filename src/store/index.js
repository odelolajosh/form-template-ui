import { configureStore } from '@reduxjs/toolkit';
import templateReducer from './template/templateSlice';

export default configureStore({
  reducer: {
    template: templateReducer,
  },
});
