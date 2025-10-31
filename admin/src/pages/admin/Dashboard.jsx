import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toastMsg from '@/utils/toastMsg';
import {Stats,URActivity,MetricsCard,IssueCard} from '@/components/custom/dashboard'

const Dashboard = () => {
  const seoMetrics = {
    overallScore: 87,
    traffic: { current: 12450, previous: 10200, change: 22.06 },
    rankings: { current: 156, previous: 134, change: 16.42 },
    impressions: { current: 89200, previous: 76500, change: 16.60 },
    ctr: { current: 4.2, previous: 3.8, change: 10.53 }
  };

  return (
    <main className="min-h-screen">
    <section>
      <div className="bg-white p-4 border rounded-md shadow-sm mb-4">
        {/* <h1 className="text-xl font-semibold"> Admin Dashboard</h1> */}
        {/* <p className='text-sm'>Hi Samantha </p> */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Overall SEO Score</h3>
            <p className="text-blue-100 mt-1">Your site's SEO health and performance</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{seoMetrics.overallScore}/100</div>
            <div className="text-sm text-blue-100 mt-1">Good</div>
          </div>
        </div>
        <div className="mt-4 w-full bg-blue-500 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${seoMetrics.overallScore}%` }}
          ></div>
        </div>
      </div>

      </div>
      <MetricsCard/>
      <Stats />
      <IssueCard/>
      <URActivity/>
    </section>
  </main>
  
  );
};

export default Dashboard;
