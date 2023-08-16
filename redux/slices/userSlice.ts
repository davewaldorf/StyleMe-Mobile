import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';

export interface UserState {
  authenticated: boolean;
  profile: User | null;
}

const initialState: UserState = {
  authenticated: false,
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<User>) => {
      state.authenticated = true;
      state.profile = action.payload;
    },
    clearUserProfile: (state) => {
      state.authenticated = false;
      state.profile = null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUserProfile, clearUserProfile } = userSlice.actions;

