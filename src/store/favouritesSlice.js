import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favouritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addFavourite(state, { payload }) {
      state.items.push(payload);
    },
    deleteFavourite(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const { addFavourite, deleteFavourite } = favouritesSlice.actions;
export const persistedReducer = persistReducer(persistConfig, favouritesSlice.reducer);
