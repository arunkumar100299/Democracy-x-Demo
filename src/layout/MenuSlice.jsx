import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
};

export const MenuSlice = createSlice({
  name: 'menuSlicer',
  initialState,
  reducers: {
    changeToggle(state) {
      return {
        ...state,
        menu: !state.menu,
      };
    },
  },
});

export const { changeToggle } = MenuSlice.actions;

export default MenuSlice.reducer;
