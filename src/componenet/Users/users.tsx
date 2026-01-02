import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setUsers(data.users); // ✅ store users
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      getUsers();
    }
  }, [token]);

  return (
    <div className="w-full h-screen p-6">
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user:any) => (
              <tr key={user._id}>
                <td className="border p-2">{user.fullName}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.phone || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center p-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

