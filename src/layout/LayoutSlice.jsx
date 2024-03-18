import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userType: '',
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    changeLayout(state, action) {
      state.userType = action.payload;
    },
  },
});

export const { changeLayout } = LayoutSlice.actions;

export default LayoutSlice.reducer;
