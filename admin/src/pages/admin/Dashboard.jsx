import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toastMsg from '@/utils/toastMsg';
import {Stats} from '@/components/custom/dashboard'

const Dashboard = () => {

  return (
    <main className="bg-gray-50 min-h-screen">
    <section>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <h1 className="text-2xl font-semibold"> Admin Dashboard</h1>
      </div>
      <Stats />
    </section>
  </main>
  
  );
};

export default Dashboard;
