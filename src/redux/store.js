import { configureStore } from '@reduxjs/toolkit';
import { presistStore } from 'redux-persist';
import { clicksReducer } from './clicksSlice';

export const store = configureStore({
  reducer: {
    contacts: [],
    filter: '',
    clicks: clicksReducer,
  },
});

export const presistor = presistStore(store);
