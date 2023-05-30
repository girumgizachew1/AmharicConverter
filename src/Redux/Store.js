// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './thememode';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
