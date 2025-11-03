import React from "react";
import {
  AdminProfile,
  GeneralSetting,
  Security,
  SeoSetting,
  AppearanceSettings,
} from "@/components/custom/Settings";

const Settings = () => {
  return (
    <main className="p-6 bg-gray-50 min-h-screen space-y-10">
      {/* 🧑‍💼 Admin Profile */}
      <section id="admin-profile">
        {/* <AdminProfile /> */}
      </section>

      {/* ⚙️ General Settings */}
      <section id="general-settings">
        {/* <GeneralSetting /> */}
      </section>

      {/* 🎨 Appearance */}
      <section id="appearance-settings">
        {/* <AppearanceSettings /> */}
      </section>

      {/* 🔐 Security */}
      <section id="security-settings">
        <SeoSetting />
      </section>

      {/* 🌐 SEO */}
      <section id="seo-settings">
        <Security />
      </section>
    </main>
  );
};

export default Settings;
