import React from 'react';
import Sidebar from '../components/sidebar';
import DashboardHeader from '../components/dashboard-header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100"> 
      <Sidebar />
      <div className="pl-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}