import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
};

export const getBooks = createAsyncThunk('books/get', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JGXq0GO4nfElkOqW7Wnq/books');
  return response.data;
});

const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload;
    });
  },
});

export const { addBooks, delBooks } = booksSlice.actions;
export default booksSlice.reducer;
