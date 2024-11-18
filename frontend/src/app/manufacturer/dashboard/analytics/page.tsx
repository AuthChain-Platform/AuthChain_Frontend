
"use client";
import React from 'react';

import { AnalyticsChart } from '../components/AnalyticsChart';

const AnalyticsPage: React.FC = () => {



  return (

    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-semibold mb-8">Analytics</h1>
      </div>



      <AnalyticsChart />


    </div>
  );
};


export default AnalyticsPage;