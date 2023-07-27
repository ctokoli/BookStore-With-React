import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import fetchData from '../../Utils/fetchData';

const initialState = {
  books: [],
  status: 'idle',
};

export const getBooks = createAsyncThunk('books/get', async () => {
  const response = await fetchData();
  return response;
});

export const postBooks = createAsyncThunk('books/post', async (requestData) => {
  await axios.post(`${process.env.REACT_APP_POST_API_KEY}`, requestData);
  const response = await fetchData();
  return response;
});

export const deleteBooks = createAsyncThunk('books/delete', async (id) => {
  await axios.delete(`${process.env.REACT_APP_POST_API_KEY}/${id}`);
  const response = await fetchData();
  return response;
});

const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state) => {
      state.status = 'failed';
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
