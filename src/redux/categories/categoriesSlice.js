import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const catSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    catStatus(state = initialState) {
      state.categories = 'Under construction';
    },
  },
});
export const { catStatus } = catSlice.actions;
export default catSlice;
