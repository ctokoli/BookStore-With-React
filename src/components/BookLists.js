import PropTypes from 'prop-types';

const BooksList = ({ bookItem }) => (

  <li>
    <h1>{bookItem.title}</h1>
    <h3>{bookItem.author}</h3>
    <button type="button">Delete</button>
  </li>
);

BooksList.propTypes = {
  bookItem: PropTypes.object.isRequired,
};

export default BooksList;
