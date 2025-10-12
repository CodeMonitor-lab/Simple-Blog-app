import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import axios from 'axios';
import toastMsg from '@/utils/toastMsg';

const Stats = () => {
  const [totalUsers, setTotalUsers] = useState(0); // store number
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`);
      const data = res.data;
      if (data?.success) {
        setTotalUsers(data.totalUsers || 0); // number
      } else {
        toastMsg.error('Failed to fetch users');
      }
    } catch (error) {
      toastMsg.error('Internal Server Error');
      console.log("Stats fetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const stats = [
    { name: "Total Users", count: loading ? "..." : totalUsers, icon: "📈" },
    { name: "Total Posts", count: "120", icon: "📝" },
    { name: "Drafts", count: "8", icon: "🗒️" },
    { name: "Scheduled Posts", count: "5", icon: "⏰" },
    { name: "Total Views", count: "23,450", icon: "👁️" },
    { name: "Comments", count: "320", icon: "💬" },
    { name: "Subscribers", count: "1,250", icon: "🧑‍🤝‍🧑" },
  ];

  return (
    <Card>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 p-4">
        {stats.map((item, index) => (
          <CardContent
            key={index}
            className="bg-gray-50  rounded-md shadow hover:shadow-md transition duration-200 p-4 flex flex-col items-center justify-center gap-2"
          >
            <span className="text-3xl">{item.icon}</span>
            <h3 className="text-lg font-medium text-gray-700">{item.name}</h3>
            <p className="text-2xl font-bold text-gray-900">{item.count}</p>
          </CardContent>
        ))}
      </div>
    </Card>
  );
};

export default Stats;
