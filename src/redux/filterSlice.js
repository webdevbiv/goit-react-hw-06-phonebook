import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },

  reducers: {
    filterContacts(state, action) {
      state.value = action.payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

export const { filterContacts } = filterSlice.actions;
