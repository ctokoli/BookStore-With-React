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
  </ul>
);

BookItems.propTypes = {
  bookProps: PropTypes.object.isRequired,
};

export default BookItems;
