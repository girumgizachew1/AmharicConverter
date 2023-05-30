// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: true, // Default mode is light mode
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === true ? false : true;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
