import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
};

export const getBooks = createAsyncThunk('books/get', async () => {
  const response = await axios.get(`${process.env.REACT_APP_YOUR_GET_API_KEY}`);
  const bookItems = Object.entries(response.data).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });
  return bookItems;
});

export const postBooks = createAsyncThunk('books/post', async (requestData) => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JGXq0GO4nfElkOqW7Wnq/books', requestData);
  return response.data;
});

const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    addBooks(state, action) {
      state.books.push(action.payload);
    },

    delBooks(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload;
    });

    builder.addCase(postBooks.fulfilled, (state) => {
      state.status = 'succeeded';
    });

    builder.addCase(postBooks.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { addBooks, delBooks } = booksSlice.actions;
export default booksSlice.reducer;
