// redux/GrowthSlice.js
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  snaps: localStorage.getItem("snaps")
    ? JSON.parse(localStorage.getItem("snaps"))
    : []
};

const GrowthSlice = createSlice({
  name: 'snap', // name can be anything; not critical
  initialState,
  reducers: {
    addToSnaps: (state, action) => {
      const snap = action.payload;
      state.snaps.push(snap);
      localStorage.setItem("snaps", JSON.stringify(state.snaps));
      toast.success("saved successfully!")
    },
    updateToSnaps: (state, action) => {
      const updated = action.payload;
      const index = state.snaps.findIndex((s) => s._id === updated._id);
      if (index !== -1) {
        state.snaps[index] = updated;
        localStorage.setItem("snaps", JSON.stringify(state.snaps));
        toast.success("updated successfully!")
      }
    },
    removeFromSnaps: (state, action) => {
      state.snaps = state.snaps.filter((snap) => snap._id !== action.payload);
      localStorage.setItem("snaps", JSON.stringify(state.snaps));
    },
    resetAllSnaps: (state) => {
      state.snaps = [];
      localStorage.removeItem("snaps");
    },
  },
});

export const { addToSnaps, updateToSnaps, removeFromSnaps, resetAllSnaps } =
  GrowthSlice.actions;

export default GrowthSlice.reducer;
