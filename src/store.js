// store.js
import { configureStore } from '@reduxjs/toolkit';
import pasteReducer from './redux/PasteSlice.js';

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
