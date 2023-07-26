import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksItem from './BookItems';
import BookForm from './BookForm';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const bookItems = Object.entries(books).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });

  return (

    <>
      {bookItems.map((book) => (
        <BooksItem
          key={book.id}
          bookProps={book}
        />
      ))}
      <BookForm />
    </>
  );
};

export default Books;
