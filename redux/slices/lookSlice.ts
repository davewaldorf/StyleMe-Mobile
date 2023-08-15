import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; 
import { Look } from '../../types/User'; // Adjust the import path

interface LookState {
  looks: Look[];
}

const initialState: LookState = {
  looks: [],
};

const lookSlice = createSlice({
  name: 'look',
  initialState,
  reducers: {
    setLooks: (state, action: PayloadAction<Look[]>) => {
      state.looks = action.payload;
    },
    addLook: (state, action: PayloadAction<Look>) => {
      state.looks.push(action.payload);
    }
  },
});

export const lookReducer = lookSlice.reducer;
export const { setLooks, addLook } = lookSlice.actions;

export const selectLooks = (state: RootState) => state.look.looks;