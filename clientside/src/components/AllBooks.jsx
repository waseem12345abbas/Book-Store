import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AllBooks = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    getbook();
  }, []);

  const deletebook = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:5000/api/deletebook/${id}`);
        getbook();
      } catch (error) {
        console.error('There was an error deleting the book!', error);
      }
    }
  };

  const getbook = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/viewbook');
      setBookData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">📖 All Books</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="py-3 px-4 border">Book ID</th>
                <th className="py-3 px-4 border">Book Name</th>
                <th className="py-3 px-4 border">Author</th>
                <th className="py-3 px-4 border">Price</th>
                <th className="py-3 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookData.map((book, index) => (
                <tr
                  key={book._id}
                  className="hover:bg-blue-50 transition duration-300 ease-in-out"
                >
                  <td className="py-2 px-4 border text-sm text-gray-600">{book._id}</td>
                  <td className="py-2 px-4 border font-medium">{book.book_name}</td>
                  <td className="py-2 px-4 border">{book.book_author}</td>
                  <td className="py-2 px-4 border text-green-600 font-semibold">₹{book.book_price}</td>
                  <td className="py-2 px-4 border flex space-x-4 justify-center">
                    <a
                      href={`updatebook/${book._id}`}
                      className="text-blue-500 hover:text-blue-700 transition transform hover:scale-110"
                      title="Update"
                    >
                      <FaEdit />
                    </a>
                    <button
                      onClick={() => deletebook(book._id)}
                      className="text-red-500 hover:text-red-700 transition transform hover:scale-110"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {bookData.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-4">
                    No books available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
