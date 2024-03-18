import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [
        ...state.user,
        {
          mail: action.payload.mail,
          password: action.payload.password,
        },
      ];
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
