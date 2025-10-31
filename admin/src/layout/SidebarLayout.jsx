import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarProvider,
  // SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LogOut, Home, FileText, PlusSquare, Settings,Tag,MessageCircle,User,Image} from "lucide-react";

const SidebarLayout = () => {
  const navigate = useNavigate();

  const links = [
    { to: "/admin/dashboard", label: "Dashboard", icon: <Home size={18} />, exact: true },
    { to: "/admin/posts", label: "Posts", icon: <FileText size={18} /> },
    { to: "/admin/add-post", label: "New Post", icon: <PlusSquare size={18} />, exact: true },
    { to: "/admin/categories", label: "Categories", icon: <Tag size={18} /> },
    { to: "/admin/comments", label: "Comments", icon: <MessageCircle size={18} /> },
    { to: "/admin/media", label: "Media Library", icon: <Image size={18} /> },
    { to: "/admin/settings", label: "Settings", icon: <Settings size={18} />, exact: true },
  ]
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/"); // back to login
  };

  return (
    <Sidebar className="h-full">
        {/* Sidebar Header */}
        <SidebarHeader className='border-2 border-b bg-sky-100 ' >
          <h1 className="font-bold text-center text-lg">Blog Admin</h1>
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent>
          <SidebarMenu>
            {links.map((link) => (
              <SidebarMenuItem key={link.to}>
                <SidebarMenuButton>
                  <NavLink
                    to={link.to}
                    end={link.exact}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded transition-colors ${
                        isActive ? "bg-gray-500 w-full text-white font-semibold" : "text-gray-800 hover:bg-blue-200"
                      }`
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        {/* Sidebar Footer */}
        <SidebarFooter className="p-4">
          <Button variant="destructive" className="w-full" onClick={handleLogout}>
            <LogOut size={18} className="mr-2" /> Logout
          </Button>
        </SidebarFooter>
      </Sidebar>
  );
};

export default SidebarLayout;