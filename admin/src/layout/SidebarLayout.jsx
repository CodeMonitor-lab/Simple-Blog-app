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
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  LogOut,
  Home,
  FileText,
  PlusSquare,
  Settings,
  Tag,
  Image,
  MessageSquareText,
  ChartNoAxesCombined,
} from "lucide-react";

const SidebarLayout = () => {
  const navigate = useNavigate();

  const links = [
    { to: "/admin/dashboard", label: "Dashboard", icon: Home },
    { to: "/admin/posts", label: "Posts", icon: FileText },
    { to: "/admin/add-post", label: "New Post", icon: PlusSquare },
    { to: "/admin/categories", label: "Categories", icon: Tag },
    { to: "/admin/comments", label: "Comments", icon: MessageSquareText },
    { to: "/admin/analytics", label: "SEO Analytics", icon: ChartNoAxesCombined },
    { to: "/admin/media", label: "Media Library", icon: Image },
    { to: "/admin/settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/"); // Redirect to login
  };

  return (
    <Sidebar className="h-full border-r">
      {/* Sidebar Header */}
      <SidebarHeader className="border-b bg-sky-100 p-4">
        <h1 className="font-bold text-center text-lg">Blog Admin</h1>
      </SidebarHeader>

      {/* Sidebar Links */}
      <SidebarContent className="mt-4">
        <SidebarMenu>
          {links.map(({ to, label, icon: Icon }) => (
            <SidebarMenuItem key={to}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex text-blue-900 items-center gap-2 px-3 py-2 rounded-md transition-colors duration-150 ${
                      isActive
                        ? "bg-blue-500 text-black font-semibold"
                        : "text-gray-500 hover:bg-blue-100"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 border-t mt-auto">
        <Button variant="destructive" className="w-full" onClick={handleLogout}>
          <LogOut size={18} className="mr-2" /> Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarLayout;
