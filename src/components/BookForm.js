import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({ title: '', author: '', category: '' });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValueWithid = { item_id: 'item4', ...formValue };

    dispatch(addBooks(formValueWithid));

    setFormValue({ title: '', author: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="input"
        placeholder="Add book"
        value={formValue.title}
        name="title"
        onChange={handleInput}
      />
      <input
        type="input"
        placeholder="Add Author"
        value={formValue.author}
        name="author"
        onChange={handleInput}
      />
      <input
        type="input"
        placeholder="Add Author"
        value={formValue.category}
        name="category"
        onChange={handleInput}
      />
      <button type="submit">Add a Book</button>
    </form>
  );
};

export default BookForm;
