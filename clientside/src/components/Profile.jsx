import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/viewuser');
      setUserData(response.data);
    } catch (error) {
      console.log('Error while fetching data', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">User Profiles</h1>

      <div className="overflow-x-auto max-w-7xl mx-auto shadow-lg rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Father Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Age</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">City</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Gender</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Country</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">DOB</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Published</th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userData.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100 transition duration-200">
                <td className="px-4 py-2 text-sm text-gray-800">{user.user_name}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.user_fname}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.user_age}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.user_city}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.user_gender}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.user_country}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.user_dob}</td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {new Date(user.user_publish_date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium ${
                      user.user_status === 'enable' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {user.user_status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
