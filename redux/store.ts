import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import { userReducer } from './slices/userSlice';
import { lookReducer } from './slices/lookSlice';
import { wardrobeReducer }from './slices/wardrobeSlice';

// Import other reducers as needed

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    look: lookReducer,
    wardrobe: wardrobeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
