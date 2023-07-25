import PropTypes from 'prop-types';

const BooksItem = ({ bookItem }) => (

  <li>
    <h1>{bookItem.title}</h1>
    <h3>{bookItem.author}</h3>
    <button type="button">Delete</button>
  </li>
);

BooksItem.propTypes = {
  bookItem: PropTypes.object.isRequired,
};

export default BooksItem;
