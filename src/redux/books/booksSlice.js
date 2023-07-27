import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
};

export const getBooks = createAsyncThunk('books/get', async () => {
  const response = await axios.get(`${process.env.REACT_APP_GET_API_KEY}`);
  const bookItems = Object.entries(response.data).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });
  return bookItems;
});

export const postBooks = createAsyncThunk('books/post', async (requestData) => {
  await axios.post(`${process.env.REACT_APP_POST_API_KEY}`, requestData);
  const response = await axios.get(`${process.env.REACT_APP_GET_API_KEY}`);
  const bookItems = Object.entries(response.data).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });
  return bookItems;
});

export const deleteBooks = createAsyncThunk('books/delete', async (id) => {
  await axios.delete(`${process.env.REACT_APP_POST_API_KEY}/${id}`);
  const response = await axios.get(`${process.env.REACT_APP_DELETE_API_KEY}`);
  const bookItems = Object.entries(response.data).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });
  return bookItems;
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
      state.status = 'success';
      state.books = action.payload;
    });

    builder.addCase(postBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    });

    builder.addCase(postBooks.rejected, (state) => {
      state.status = 'failed';
    });

    builder.addCase(deleteBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    });

    builder.addCase(deleteBooks.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { addBooks, delBooks } = booksSlice.actions;
export default booksSlice.reducer;
