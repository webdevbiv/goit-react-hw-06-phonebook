import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    update(state) {
      state.value += 1;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [''], // navigation will not be persisted
};

export const persistedClicksReducer = persistReducer(
  persistConfig,
  clicksSlice.reducer
);

export const { update } = clicksSlice.actions;
