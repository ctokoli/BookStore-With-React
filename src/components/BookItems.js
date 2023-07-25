import PropTypes from 'prop-types';
import BooksItem from './BookItem';

const BookItems = ({ bookProps }) => (
  <div className="bookItems">
    <ul>
      {bookProps.map((book) => (
        <BooksItem
          key={book.id}
          bookItem={book}
        />
      ))}
    </ul>
  </div>
);

BookItems.propTypes = {
  bookProps: PropTypes.array.isRequired,
};

export default BookItems;
