import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: false,
};

export const DarkModeSlice = createSlice({
  name: 'screenMode',
  initialState,
  reducers: {
    changeMode(state) {
      return {
        ...state,
        mode: !state.mode,
      };
    },
  },
});

export const { changeMode } = DarkModeSlice.actions;

export default DarkModeSlice.reducer;
