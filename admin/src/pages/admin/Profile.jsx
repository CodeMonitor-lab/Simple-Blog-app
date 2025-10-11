import React from "react";
import {AdminUser,LoggedInUsers} from '@/components/custom/users/index'

const AdminHeader = () => {
  return (
    <main>
      <AdminUser/>
      <LoggedInUsers/>
    </main>
  );
};

export default AdminHeader;
