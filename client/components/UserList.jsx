import React, { useState, useEffect } from "react";
import { getUser,updateUser,deleteUer } from "../services/userService";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await getUser();
      setUsers(users);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          User List
        </h1>

        {users.length === 0 ? (
          <p className="text-gray-500 text-center">
            No users found
          </p>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user._id}
                className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="font-semibold text-gray-700">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>

                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Age: {user.age}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 text-right">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserList;
