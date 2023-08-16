import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; 
import { WardrobeItem } from '../../types/User'; // Adjust the import path

interface WardrobeState {
  wardrobeItems: WardrobeItem[];
}

const initialState: WardrobeState = {
  wardrobeItems: [],
};

const wardrobeSlice = createSlice({
  name: 'wardrobe',
  initialState,
  reducers: {
    setWardrobeItems: (state, action: PayloadAction<WardrobeItem[]>) => {
      state.wardrobeItems = action.payload;
    },
    addWardrobeItem: (state, action: PayloadAction<WardrobeItem>) => {
      state.wardrobeItems.push(action.payload);
    },
  },
});

export const wardrobeReducer = wardrobeSlice.reducer;
export const { setWardrobeItems, addWardrobeItem } = wardrobeSlice.actions;

