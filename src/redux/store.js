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
import { persistStore } from 'redux-persist';
import { clicksReducer } from './clicksSlice';

export const store = configureStore({
  reducer: {
    clicks: clicksReducer,
  },
});

export const persistor = persistStore(store);
