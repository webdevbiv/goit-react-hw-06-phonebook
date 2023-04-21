// import { configureStore } from '@reduxjs/toolkit';
// import { presistStore } from 'redux-persist';
// import { clicksReducer } from './clicksSlice';
// export const store = configureStore({
//   reducer: {
//     contacts: [],
//     filter: '',
//     clicks: clicksReducer,
//   },
// });
// export const presistor = presistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { clicksSlice } from './clicksSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { storage } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedClicksReducer = persistReducer(persistConfig);

export const store = configureStore({
  reducer: {
    clicks: clicksSlice.reducer,
  },
});
