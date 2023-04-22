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

import { clicksReducer } from './clicksSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    clicks: clicksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
