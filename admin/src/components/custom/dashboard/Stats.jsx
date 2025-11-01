import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import toastMsg from "@/utils/toastMsg";
import {
  Users,
  FileText,
  Eye,
  UserCheck,
} from "lucide-react"; // ✅ Lucide icons

const Stats = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`);
      const data = res.data;
      if (data?.success) {
        setTotalUsers(data.counAllUser);
      } else {
        toastMsg.error("Failed to fetch users");
      }
    } catch (error) {
      toastMsg.error("Internal Server Error");
      console.log("Stats fetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const stats = [
    { name: "Active Users", count: loading ? "..." : totalUsers, icon: Users },
    { name: "Total Posts", count: "120", icon: FileText },
    { name: "Total Views", count: "23,450", icon: Eye },
    { name: "Subscribers", count: "1,250", icon: UserCheck },
  ];

  return (
    <Card>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 p-4">
        {stats.map((item, index) => (
          <CardContent
            key={index}
            className="rounded-md border shadow-sm hover:shadow-md transition duration-200 p-4 flex flex-col items-center justify-center gap-3"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{item.count}</p>
            <h3 className="text-lg font-medium text-gray-700 text-center">
              {item.name}
            </h3>
          </CardContent>
        ))}
      </div>
    </Card>
  );
};

export default Stats;
