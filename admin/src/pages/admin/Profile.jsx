import React from "react";
import {AdminUser,LoggedInUsers} from '@/components/custom/users/index'
import {AdminProfile,GeneralSetting,AppearanceSettings} from '@/components/custom/Settings'

const AdminHeader = () => {
  return (
    <main>
      {/* <AdminUser/> */}
      {/* <LoggedInUsers/> */}
      <AdminProfile/>
      <GeneralSetting/>
      <AppearanceSettings/>
    </main>
  );
};

export default AdminHeader;
