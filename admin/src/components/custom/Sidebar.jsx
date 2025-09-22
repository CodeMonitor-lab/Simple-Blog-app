import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const links = [
    { to: "/admin/dashboard", label: "Dashboard", exact: true },
    { to: "/admin/posts", label: "All Posts" },
    { to: "/admin/add-post", label: "Add Post", exact: true },
    { to: "/admin/settings", label: "Settings", exact: true },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/"); // back to login
  };

  return (
    <aside className="bg-blue-200 h-full p-4 flex flex-col justify-between">
      <nav>
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.exact} // ensures only exact routes match
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded bg-blue-400 font-bold text-white"
                    : "block px-3 py-2 rounded hover:bg-blue-300 text-gray-800"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
