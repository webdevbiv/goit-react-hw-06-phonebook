// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// const clicksSlice = createSlice({
//   name: 'clicks',
//   initialState: { value: 0 },
//   reducers: {
//     update(state) {
//       state.value += 1;
//     },
//   },
// });
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: [''],
// };
// export const persistedClicksReducer = persistReducer(
//   persistConfig,
//   clicksSlice.reducer
// );
// export const { update } = clicksSlice.actions;

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
  key: 'clicks',
  storage,
  whitelist: ['value'],
};

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { update } = clicksSlice.actions;
