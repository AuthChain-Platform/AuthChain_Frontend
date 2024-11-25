'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  brandName: string
  price: number
  productDescription: string
  // status: 'In Stock' | 'Out of Stock' | 'Low Stock'
  trackingID: number
  batchID: number
  expiryDate:string
  owner: string
}

export default function ProductCard({
  brandName,
  price,
  productDescription,
  // status,
  trackingID,
  batchID,
  expiryDate,
  owner
}: ProductCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{brandName}</span>
          <Badge 
            // variant={status === 'In Stock' ? 'default' : status === 'Low Stock' ? 'warning' : 'destructive'}
          >
            {status}

          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <span className="font-semibold">Price:</span>
          <span className="col-span-2">${price.toFixed(2)}</span>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <span className="font-semibold">Description:</span>
          <p className="col-span-2">{productDescription}</p>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <span className="font-semibold">Expiry Date:</span>
          <span className="col-span-2">{expiryDate}</span>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <span className="font-semibold">Tracking ID:</span>
          <span className="col-span-2">{trackingID}</span>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <span className="font-semibold">Batch ID:</span>
          <span className="col-span-2">{batchID}</span>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <span className="font-semibold">Owner:</span>
          <span className="col-span-2">{owner}</span>
        </div>
      </CardContent>
    </Card>
  )
}

