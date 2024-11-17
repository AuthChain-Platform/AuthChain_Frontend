import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

interface Product {
  batchId: string;
  name: string;
  quantity: number;
  productionDate: string;
  expiryDate: string;
  status: "Available" | "Low Stock" | "Out of Stock";
}

const ProductsTable = () => {
  const products: Product[] = [
    {
      batchId: "#001245",
      name: "Premium Hand Sanitizer",
      quantity: 500,
      productionDate: "September 12, 2024",
      expiryDate: "September 12, 2024",
      status: "Available",
    },
    {
      batchId: "#001245",
      name: "Premium Hand Sanitizer",
      quantity: 50000,
      productionDate: "September 12, 2024",
      expiryDate: "September 12, 2024",
      status: "Low Stock",
    },
    {
      batchId: "#001245",
      name: "Premium Hand Sanitizer",
      quantity: 50000,
      productionDate: "September 12, 2024",
      expiryDate: "September 12, 2024",
      status: "Out of Stock",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-emerald-100 text-emerald-600";
      case "Low Stock":
        return "bg-amber-100 text-amber-600";
      case "Out of Stock":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Batch ID</TableHead>
              <TableHead className="font-medium">Product Name</TableHead>
              <TableHead className="font-medium">Quantity in Stock</TableHead>
              <TableHead className="font-medium">Production Date</TableHead>
              <TableHead className="font-medium">Expiry Date</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded relative overflow-hidden">
                    <Image 
                      src="/product.png"
                      alt="Product"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  {product.batchId}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.quantity.toLocaleString()}</TableCell>
                <TableCell>{product.productionDate}</TableCell>
                <TableCell>{product.expiryDate}</TableCell>
                <TableCell>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Separated Pagination */}
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm text-gray-500">Showing 1-50 of 78</p>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            ←
          </Button>
          <Button variant="outline" size="icon">
            →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;