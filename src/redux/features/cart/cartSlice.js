import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isHidden: true,
  },
  reducers: {
    toggle: (state) => {
      state.isHidden = !state.isHidden;
      return state;
    },
  },
});

export const { toggle } = cartSlice.actions;
export default cartSlice.reducer;
