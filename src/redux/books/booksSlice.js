import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const booksSlice = createSlice({
  name: 'addBooks',
  initialState,
  reducers: {
    addBooks(state, action) {
      state.push(action.payload);
    },

    delBooks(state, action) {
      state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBooks, delBooks } = booksSlice.actions;
export default booksSlice.reducer;
