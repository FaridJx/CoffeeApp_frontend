import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: null,
    total: 0,
    basket: []
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.value.basket.push(action.payload);
    },
    removeBasket: (state, action) => {
      state.value.basket = state.value.basket.filter((e) => e.name !== action.payload.name)
    },
  },
});

export const { addBasket, removeBasket, totalBasket } = userSlice.actions;
export default userSlice.reducer;
