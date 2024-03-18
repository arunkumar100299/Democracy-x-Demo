import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en',
};

export const LanguageSlice = createSlice({
  name: 'langMode',
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = LanguageSlice.actions;

export default LanguageSlice.reducer;
