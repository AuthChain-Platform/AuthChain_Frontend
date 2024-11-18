import React from 'react';
import PageHeader from '../components/PageHeader';
import ProductsTable from './components/products-table';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Products" />
      <main className="p-6">
        <ProductsTable />
      </main>
    </div>
  );
}