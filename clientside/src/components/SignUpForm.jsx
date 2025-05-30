import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_fname: '',
    user_age: '',
    user_city: '',
    user_gender: '',
    user_country: 'Pakistan',
    user_dob: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/addUser', formData);
      setFormData({
        user_name: '',
        user_fname: '',
        user_age: '',
        user_city: '',
        user_gender: '',
        user_country: 'Pakistan',
        user_dob: '',
      });
      alert("You are registered successfully.")
    } catch (error) {
      console.error(`Error while posting data ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-600">
          Give some information about you
        </h2>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          name="user_fname"
          placeholder="Father Name"
          value={formData.user_fname}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          name="user_age"
          placeholder="Your Age"
          value={formData.user_age}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          name="user_city"
          placeholder="Your City"
          value={formData.user_city}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
          Select your gender
        </label>
        <select
          name="user_gender"
          value={formData.user_gender}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Others</option>
        </select>

        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
          Select Country
        </label>
        <select
          name="user_country"
          value={formData.user_country}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select</option>
          <option value="Pakistan">Pakistan</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
        </select>

        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          name="user_dob"
          value={formData.user_dob}
          onChange={handleInputChange}
          className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
