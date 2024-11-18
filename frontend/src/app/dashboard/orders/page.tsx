import React from 'react'
import ProductsTable from '../products/components/products-table'

const page = () => {
  return (
    <div> 
    <h1 className="text-2xl font-semibold text-gray-900 mb-9">Orders</h1>


        <ProductsTable />

</div>
  )
}

export default page