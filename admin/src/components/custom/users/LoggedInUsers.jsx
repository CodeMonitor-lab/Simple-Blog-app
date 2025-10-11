import React from "react";
import axios from "axios";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const LoggedInUsers = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/users");
        const data = response.data;
        setUsers(data.findAllUser || []);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  return (
    <main className="p-4">
      <Card className="p-4">
        <CardHeader>
          <h2 className="text-xl font-semibold">Logged In Users</h2>
        </CardHeader>

        <CardContent>
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {users.map((user) => (
              <li
                key={user._id}
                className="border rounded-lg p-3 shadow-sm hover:shadow-md transition bg-white"
              >
                <img
                  className="w-20 h-20 object-cover rounded-md mb-2"
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
                  alt={user.name}
                />
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm mt-1">
                  Status:{" "}
                  <span
                    className={`font-medium ${
                      user.isActive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Joined: {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoggedInUsers;
