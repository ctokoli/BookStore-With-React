import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import catSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: catSlice,
  },
});

export default store;
