import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (_, { payload }) => {
      return payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
