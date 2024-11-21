import React from 'react';

import { Button } from "@/components/ui/button";

import ProductsTable from '@/app/manufacturer/dashboard/products/components/products-table';


export default function ProductsPage() {
  return (
   
    <>
  <div className="min-h-screen">
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
    <h1 className="text-2xl font-semibold text-gray-900">Request Product</h1>
    <Button className="bg-blue-600 hover:bg-blue-700">
      Request Product
    </Button>
  </div>
  <main className="p-6">
      <ProductsTable />
   </main>
  </div>
  </>
  );
}