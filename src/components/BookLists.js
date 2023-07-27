import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/booksSlice';

const BooksList = ({ bookItem }) => {
  const dispatch = useDispatch();
  const removeBook = (id) => {
    dispatch(deleteBooks(id));
  };
  return (
    <li>
      <h1>{bookItem.title}</h1>
      <h3>{bookItem.author}</h3>
      <button type="button" onClick={() => removeBook(bookItem.id)}>Delete</button>
    </li>
  );
};

BooksList.propTypes = {
  bookItem: PropTypes.object.isRequired,
};

export default BooksList;
