import React from 'react';
import PageHeader from '../components/PageHeader';

import { AnalyticsChart } from '@/app/manufacturer/dashboard/components/AnalyticsChart';


export default function ProductJourney() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Product Journey" />
      <main className="p-6">
       <AnalyticsChart />
      </main>
    </div>
  );
}