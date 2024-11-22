import React from 'react';
import PageHeader from '../components/PageHeader';
import ProductsTable from '@/app/manufacturer/dashboard/products/components/products-table';


export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="My Products" />
      <main className="p-6">
        <ProductsTable />
      </main>
    </div>
  );
}