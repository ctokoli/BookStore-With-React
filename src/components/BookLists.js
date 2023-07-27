import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/booksSlice';

const BooksList = ({ bookItem }) => {
  const dispatch = useDispatch();
  const removeBook = (id) => {
    dispatch(deleteBooks(id));
  };
  return (
    <div className="book-content">
      <h4>{bookItem.category}</h4>
      <h2>{bookItem.title}</h2>
      <h6>{bookItem.author}</h6>
      <div className="action-button">
        <button type="button" onClick={() => removeBook(bookItem.id)}>Delete</button>
        <button type="button">Comment</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

BooksList.propTypes = {
  bookItem: PropTypes.object.isRequired,
};

export default BooksList;
