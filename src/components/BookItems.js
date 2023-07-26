import PropTypes from 'prop-types';
import BooksLists from './BookLists';

const BookItems = ({ bookProps }) => (
  <div className="bookItems">
    <ul>
      <BooksLists
        key={bookProps.id}
        bookItem={bookProps}
      />
    </ul>
  </div>
);

BookItems.propTypes = {
  bookProps: PropTypes.object.isRequired,
};

export default BookItems;
