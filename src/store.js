// store.js
import { configureStore } from '@reduxjs/toolkit';
import pasteReducer from './redux/PasteSlice.js';
import growthReducer from './redux/GrowthSlice.js'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
    snap: growthReducer,
  },
});
