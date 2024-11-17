import { Metadata } from "next"
import AddProductForm from "@/app/dashboard/components/AddProductForm"


export const metadata: Metadata = {
  title: "Add Product",
  description: "Add a new product to your inventory",
}

export default function AddProductPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      <div className="flex-1">
       
        <main className="p-8">
          <h1 className="text-2xl font-semibold mb-8">Add Product</h1>
          <AddProductForm />
        </main>
      </div>
    </div>
  )
}