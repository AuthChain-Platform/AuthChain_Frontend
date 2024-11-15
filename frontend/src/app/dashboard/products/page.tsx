import React from 'react';
import ProductsHeader from './components/product-header';
import ProductsTable from './components/products-table';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <ProductsHeader />
      <main className="p-6">
        <ProductsTable />
      </main>
    </div>
  );
}