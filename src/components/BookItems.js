import PropTypes from 'prop-types';
import BooksLists from './BookLists';
import Progress from './Progress';

const BookItems = ({ bookProps }) => (
  <ul className="bookItems">
    <li>
      <BooksLists
        key={bookProps.id}
        bookItem={bookProps}
      />
    </li>
    <Progress />
  </ul>
);

BookItems.propTypes = {
  bookProps: PropTypes.object.isRequired,
};

export default BookItems;
