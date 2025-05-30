import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const { bid } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    book_name: '',
    book_author: '',
    book_price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/viewbook/${bid}`)
      .then((response) => {
        setBookData({
          book_name: response.data.book_name,
          book_author: response.data.book_author,
          book_price: response.data.book_price,
        });
      })
      .catch((error) => {
        console.error('Error while getting the book', error);
      });
  }, [bid]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/updatebook/${bid}`, bookData);
      setBookData({
        book_name: '',
        book_author: '',
        book_price: '',
      });
      navigate('/books');
    } catch (error) {
      console.error('Error while updating the book', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold text-center mb-6">Update Book</h2>

        <div className="mb-4">
          <label htmlFor="book_name" className="block text-gray-700 font-medium mb-1">
            Book Name
          </label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            value={bookData.book_name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter Book Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="book_author" className="block text-gray-700 font-medium mb-1">
            Book Author
          </label>
          <input
            type="text"
            id="book_author"
            name="book_author"
            value={bookData.book_author}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter Author Name"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="book_price" className="block text-gray-700 font-medium mb-1">
            Book Price
          </label>
          <input
            type="text"
            id="book_price"
            name="book_price"
            value={bookData.book_price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter Price"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
