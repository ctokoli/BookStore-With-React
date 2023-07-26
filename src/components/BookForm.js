import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { postBooks } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({ title: '', author: '', category: '' });
  const id = uuidV4();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formValueWithid = { item_id: id, ...formValue };
      const response = await dispatch(postBooks(formValueWithid));
      console.log(response);
    } catch (error) {
      console.log('Error', error);
    }

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
        placeholder="Add Category"
        value={formValue.category}
        name="category"
        onChange={handleInput}
      />
      <button type="submit">Add a Book</button>
    </form>
  );
};

export default BookForm;
