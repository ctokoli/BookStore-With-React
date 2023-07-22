/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

const BooksItem = ({ bookItem }) => (

  <li>
    <h1>{bookItem.title}</h1>
    <h4>{bookItem.author}</h4>
    <button type="button">Delete</button>
  </li>
);

BooksItem.propTypes = {
  bookItem: PropTypes.object.isRequired,
};

export default BooksItem;
