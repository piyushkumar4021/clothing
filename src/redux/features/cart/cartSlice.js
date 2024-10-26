import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isHidden: true,
    cartItems: [],
  },

  reducers: {
    toggle: (state) => {
      state.isHidden = !state.isHidden;
    },
    addItem: ({ cartItems }, { payload }) => {
      const item = cartItems.find((item) => item.id === payload.id);

      if (!item) {
        cartItems.push({ ...payload, quantity: 1 });
        return;
      }

      item.quantity += 1;
    },
  },
});

export const { toggle, addItem } = cartSlice.actions;
export default cartSlice.reducer;
