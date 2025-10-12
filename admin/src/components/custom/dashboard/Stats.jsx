import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import toastMsg from "@/utils/toastMsg";

const Stats = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`);
      if (res.data.success) {
        setTotalUsers(res.data.totalUsers || 0);
      } else {
        toastMsg.error("Failed to fetch user count");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toastMsg.error("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const stats = [
    { name: "👥 Total Users", count: loading ? "..." : totalUsers },
    { name: "📝 Total Posts", count: "120" },
    { name: "🗒️ Drafts", count: "8" },
    { name: "⏰ Scheduled Posts", count: "5" },
    { name: "👁️ Total Views", count: "23,450" },
    { name: "💬 Comments", count: "320" },
    { name: "🧑‍🤝‍🧑 Subscribers", count: "1,250" },
  ];

  return (
    <Card>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 p-4">
        {stats.map((item, index) => (
          <CardContent
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition duration-200 p-4 flex flex-col items-center justify-center gap-2"
          >
            <h3 className="text-3xl">{item.name.split(" ")[0]}</h3>
            <h3 className="text-lg font-medium text-gray-700">{item.name.split(" ").slice(1).join(" ")}</h3>
            <p className="text-2xl font-bold text-gray-900">{item.count}</p>
          </CardContent>
        ))}
      </div>
    </Card>
  );
};

export default Stats;
