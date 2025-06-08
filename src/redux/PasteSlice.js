// redux/PasteSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
};

const PasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success('Paste Added Successfully !')
    },

    updateToPastes: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(item => item._id === updatedPaste._id);

      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        console.log("Updated paste:", updatedPaste);
        toast.success('Paste Updated !')
      } else {
        console.warn("Paste not found for update:", updatedPaste._id);
        toast.warn("Paste not found for update:", updatedPaste._id)
      }
    },

    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const updatedPastes = state.pastes.filter(paste => paste._id !== pasteId);
      
      state.pastes = updatedPastes;
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      console.log("Removed paste with ID:", pasteId);
      toast.success("Removed paste ")
    },

    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes reset")
      console.log("All pastes reset");
    }
  }
});

export const {
  addToPastes,
  updateToPastes,
  removeFromPastes,
  resetAllPastes
} = PasteSlice.actions;

export default PasteSlice.reducer;
