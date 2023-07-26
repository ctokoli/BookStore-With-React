import { useSelector } from 'react-redux';
import BooksItem from './BookItems';
import BookForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      {books.map((book) => (
        <BooksItem
          key={book.item_id}
          bookProps={book}
        />
      ))}
      <BookForm />
    </>
  );
};

export default Books;
