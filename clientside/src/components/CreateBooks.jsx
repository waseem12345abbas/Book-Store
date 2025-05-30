import React, { useState } from 'react';
import axios from 'axios';

const CreateBooks = () => {
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/addbook', bookData);
            console.log(response.data);
            setBookData({
                book_name: '',
                book_author: '',
                book_price: '',
            });
            alert("Book created successfully")
        } catch (error) {
            console.error("Cannot store in database", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">📚 Add a New Book</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Book Name</label>
                        <input
                            type="text"
                            name="book_name"
                            value={bookData.book_name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter book name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Book Author</label>
                        <input
                            type="text"
                            name="book_author"
                            value={bookData.book_author}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter author name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Book Price</label>
                        <input
                            type="number"
                            name="book_price"
                            value={bookData.book_price}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter price"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        ➕ Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateBooks;
