import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get(`${process.env.REACT_APP_GET_API_KEY}`);
  const bookItems = Object.entries(response.data).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });
  return bookItems;
};
export default fetchData;
