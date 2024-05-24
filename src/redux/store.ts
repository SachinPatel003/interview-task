import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slice/authSlice';
import dialerReducer from '../redux/slice/dialerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dialer: dialerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;