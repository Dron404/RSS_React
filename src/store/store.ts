import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AppReducer from './redusers/UseSlice';
const rootReducer = combineReducers({
  AppReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispetch = AppStore['dispatch'];
