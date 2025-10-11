import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { MessageCircle, User, BellDot } from "lucide-react";
import { UserProfile } from "@/components/custom/users";

const Navbar = () => {
  const links = [
    { to: "/admin/messages", label: "Message", Icon: MessageCircle },
    { to: "/admin/notification", label: "Notification", Icon: BellDot },
    { to: "/admin/profile", label: "Profile", Icon: UserProfile },
  ];

  return (
    <header className="bg-gray-100 px-10 py-2 sticky top-0 z-50 shadow">
      <nav className="flex justify-between items-center" >
          <div className="flex items-center justify-center" >
            <SidebarTrigger>
              <h1>Hello</h1>
            </SidebarTrigger>
            <h1 className="text-gray-600" >Admin Panel</h1>
          </div>
        <ul className="flex gap-4">
          {links.map(({ to, label, Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 text-black bg-gray-400 text-sm hover:bg-gray-300 border-1 border-gray-400  px-2 py-2 rounded-sm"
                    : "flex items-center gap-1 text-gray-900 bg-gray-300 text-sm hover:bg-gray-300 border-1 border-gray-300  px-2 py-2 rounded-sm"
                }
              >
                <Icon size={18} />
                {/* <span>{}</span> */}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

