import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/admin/comments", label: "Comment" },
    { to: "/admin/message", label: "Message" },
    { to: "/admin/notification", label: "Notification" },
    { to: "/admin/settings", label: "Settings" },
  ];

  return (
    <header className="bg-blue-200 p-2 sticky top-0 z-50 shadow">
      <nav>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-500 px-3 py-1 rounded font-semibold"
                    : "text-gray-800 hover:bg-blue-300 px-3 py-1 rounded"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
