
import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductsHeader = ({title}: { title: string }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      
      <Link href="/manufacturer/dashboard/add_product">
       
      <Button className="bg-blue-600 hover:bg-blue-700">
        <Plus className="h-5 w-5 mr-2" />
        Add Product
      </Button>
      </Link>
    </div>
  );
};

export default ProductsHeader;