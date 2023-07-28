import PropTypes from 'prop-types';
import BooksLists from './BookLists';

const BookItems = ({ bookProps }) => (
  <ul className="bookItems">
    <li>
      <BooksLists
        key={bookProps.id}
        bookItem={bookProps}
      />
    </li>
    <li><h1>Progress Container</h1></li>
  </ul>
);

BookItems.propTypes = {
  bookProps: PropTypes.object.isRequired,
};

export default BookItems;
