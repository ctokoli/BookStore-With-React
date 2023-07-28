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
    const formValueWithid = { item_id: id, ...formValue };
    dispatch(postBooks(formValueWithid));
    setFormValue({ title: '', author: '', category: '' });
  };

  return (
    <>
      <div className="horizontal-divider"> </div>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          className="input title-input"
          type="input"
          placeholder="Add Book title"
          value={formValue.title}
          name="title"
          onChange={handleInput}
        />
        <input
          className="input title-input"
          type="input"
          placeholder="Add Book Author"
          value={formValue.author}
          name="author"
          onChange={handleInput}
        />
        <select className="input title-input" name="category" value={formValue.category} onChange={handleInput}>
          <option value="Select Category">Select Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Novel">Novel</option>
        </select>
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default BookForm;
