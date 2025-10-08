import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/users');
      // findAllUser is from backend response
      setUsers(res.data.findAllUser || []);
    } catch (error) {
      console.log('Get users failed:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      <header className='flex gap-4 bg-blue-200 p-8 items-center'  >
        <div className='border-2 border-green-400 rounded-full p-1' >
        <img className='max-w-26 border-2 p-1 border-green-600 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s" alt="" />
        </div>
          <article>
              <h1 className='text-2xl font-bold' >Alexendra Chain</h1>
              <p className='text-gray-700 text-md' >Super Administrator</p>
            <div className='flex gap-2 items-center text-center ' >
              <p className='text-gray-700 text-md '  >San Francisco, CA</p>
              <p className='text-gray-700 text-md '  >Joined January 10, 2023</p>
              <p className='text-green-700 rounded font-bold ' >Active</p>
            </div>
            <p className='text-gray-700'  >Last login: Today, 9:45 AM</p>
          </article>
      </header>
    <div style={{ padding: '1rem' }}>
      {/*  */}
      <h2>All Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={user._id ? user._id : index}>
            {user.name} — {user.email}
            {user.createdAt && ` (Created at: ${new Date(user.createdAt).toLocaleDateString()})`}
          </li>
        ))}
      </ul>
    </div>
    </main>
  );
};

export default Profile;
