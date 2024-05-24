import { createSlice } from '@reduxjs/toolkit';

interface DialerState {
  currentNumber: string;
}

const initialState: DialerState = {
  currentNumber: '',
};

const dialerSlice = createSlice({
  name: 'dialer',
  initialState,
  reducers: {
    setCurrentNumber: (state, action) => {
      state.currentNumber = action.payload;
    },
  },
});

export const { setCurrentNumber } = dialerSlice.actions;
export default dialerSlice.reducer;
