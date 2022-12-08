import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      var item = action.payload;
      const existsItem = state.find((cart) => cart.id === item.id);
      if (!existsItem) {
        state.push({ ...item, quantity: 0 });
      }
    },
    removeCart: (state, action) => {
      const id = action.payload;
      return state.filter((cartData) => cartData.id !== id);
    },
    increaseData: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((cart) => cart.id === item);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      }
    },
    decreaseData: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((cart) => cart.id === item.id);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity - 1;
      }
    },
  },
});

export default CartSlice.reducer;
export const { addCart, removeCart, increaseData, decreaseData } =
  CartSlice.actions;

//reusable selectors:
export const cartData = (state) => state.cart;
