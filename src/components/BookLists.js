/* eslint-disable react/self-closing-comp */
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
      <div className="action-buttons">
        <button className="button-outline" type="button">Comments</button>
        <div className="vertical-divider"></div>
        <button className="button-outline" type="button" onClick={() => removeBook(bookItem.id)}>Remove</button>
        <div className="vertical-divider"></div>
        <button className="button-outline" type="button">Edit</button>
      </div>
    </div>
  );
};

BooksList.propTypes = {
  bookItem: PropTypes.object.isRequired,
};

export default BooksList;
