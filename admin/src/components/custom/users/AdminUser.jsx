import React from "react";
import { ShieldUser, MapPin, Calendar, Clock } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="flex gap-6 rounded-xl bg-blue-100 p-6 items-center shadow-sm">
      {/* Profile Image */}
      <div className="border-2 border-green-400 rounded-full p-1">
        <img
          className="w-24 h-24 object-cover border-2 p-1 border-green-600 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"
          alt="Profile"
        />
      </div>

      {/* Profile Info */}
      <article className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-900">Alexendra Chain</h1>

        <p className="text-gray-700 text-md flex items-center gap-1">
          <ShieldUser size={18} className="text-blue-600" /> Super Administrator
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-700">
          <span className="flex items-center gap-1">
            <MapPin size={16} className="text-gray-600" /> San Francisco, CA
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={16} className="text-gray-600" /> Joined January 10, 2023
          </span>
          <span className="flex items-center gap-1 text-green-700 font-semibold">
            <Clock size={16} /> Active
          </span>
        </div>

        <p className="text-gray-600 text-sm">Last login: Today, 9:45 AM</p>
      </article>
    </header>
  );
};

export default AdminHeader;
