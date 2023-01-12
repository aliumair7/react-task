import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import filtersSLice from './filtersSlice';


const combineReducer = {

  loggerFilters:filtersSLice
  
};
const store = configureStore({
  reducer: combineReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: process.env.NODE_ENV !== 'production',
});

export default store;
