"use client";

import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
  productName: string;
  batchId: string;
  quantity: string;
  productionDate: string;
  expiryDate: string;
  description: string;
  photo: File | null;
}

interface FormErrors {
  [key: string]: string;
}


interface AddProductFormProps {
  onFormSubmit: (data: FormData) => void;
}

export default function AddProductForm({ onFormSubmit }: AddProductFormProps) {
  const [formData, setFormData] = useState<FormData>({
    productName: "",
    batchId: "",
    quantity: "",
    productionDate: "",
    expiryDate: "",
    description: "",
    photo: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required";
    }

    if (!formData.batchId.trim()) {
      newErrors.batchId = "Batch ID is required";
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (isNaN(Number(formData.quantity))) {
      newErrors.quantity = "Quantity must be a number";
    }

    if (!formData.productionDate) {
      newErrors.productionDate = "Production date is required";
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (new Date(formData.expiryDate) <= new Date(formData.productionDate)) {
      newErrors.expiryDate = "Expiry date must be after production date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) return;

    setIsSubmitting(true);

    onFormSubmit(formData);

    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name Field */}
            <div className="space-y-2">
              <label htmlFor="productName" className="text-sm font-medium">
                Product Name *
              </label>
              <Input
                id="productName"
                placeholder="Enter your product name"
                value={formData.productName}
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.value })
                }
                className={errors.productName ? "border-red-500" : ""}
              />
              {errors.productName && (
                <span className="text-sm text-red-500">{errors.productName}</span>
              )}
            </div>

            {/* Additional fields like Batch ID, Quantity, etc. */}

          </div>

          <div className="flex justify-between pt-6">
            <Button
              type="submit"
              className="w-[200px] bg-purple-600 hover:bg-purple-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding Product..." : "Add Product"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}




// "use client";

// import React, { useState } from "react";
// import { Camera } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";

// interface FormData {
//   productName: string;
//   batchId: string;
//   quantity: string;
//   productionDate: string;
//   expiryDate: string;
//   description: string;
//   photo: File | null;
// }

// interface FormErrors {
//   [key: string]: string;
// }

// export default function AddProductForm() {
//   const [formData, setFormData] = useState<FormData>({
//     productName: "",
//     batchId: "",
//     quantity: "",
//     productionDate: "",
//     expiryDate: "",
//     description: "",
//     photo: null,
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [photoPreview, setPhotoPreview] = useState<string>("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState("");

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.productName.trim()) {
//       newErrors.productName = "Product name is required";
//     }

//     if (!formData.batchId.trim()) {
//       newErrors.batchId = "Batch ID is required";
//     }

//     if (!formData.quantity.trim()) {
//       newErrors.quantity = "Quantity is required";
//     } else if (isNaN(Number(formData.quantity))) {
//       newErrors.quantity = "Quantity must be a number";
//     }

//     if (!formData.productionDate) {
//       newErrors.productionDate = "Production date is required";
//     }

//     if (!formData.expiryDate) {
//       newErrors.expiryDate = "Expiry date is required";
//     } else if (new Date(formData.expiryDate) <= new Date(formData.productionDate)) {
//       newErrors.expiryDate = "Expiry date must be after production date";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
      
//       // Validate file size (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         setErrors({ ...errors, photo: "Image size should be less than 5MB" });
//         return;
//       }

//       // Validate file type
//       if (!file.type.startsWith("image/")) {
//         setErrors({ ...errors, photo: "Please upload an image file" });
//         return;
//       }

//       setFormData({ ...formData, photo: file });
      
//       // Create preview URL
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPhotoPreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
      
//       // Clear any previous photo errors
//       const newErrors = { ...errors };
//       delete newErrors.photo;
//       setErrors(newErrors);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitError("");

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Create FormData for multipart/form-data submission
//       const submitData = new FormData();
      
//       // Handle each field separately with proper type checking
//       submitData.append('productName', formData.productName);
//       submitData.append('batchId', formData.batchId);
//       submitData.append('quantity', formData.quantity);
//       submitData.append('productionDate', formData.productionDate);
//       submitData.append('expiryDate', formData.expiryDate);
//       submitData.append('description', formData.description);
      
//       // Only append photo if it exists
//       if (formData.photo) {
//         submitData.append('photo', formData.photo);
//       }

//       const response = await fetch("/api/products", {
//         method: "POST",
//         body: submitData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form");
//       }

//       // Reset form after successful submission
//       setFormData({
//         productName: "",
//         batchId: "",
//         quantity: "",
//         productionDate: "",
//         expiryDate: "",
//         description: "",
//         photo: null,
//       });
//       setPhotoPreview("");
      
//       // You might want to show a success message or redirect here
//     } catch (error) {
//       setSubmitError("Failed to submit form. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Card className="w-full max-w-4xl mx-auto">
//       <CardContent className="p-6">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Photo Upload Section */}
//           <div className="flex justify-center mb-8">
//             <div className="relative w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 id="photo-upload"
//                 onChange={handlePhotoUpload}
//               />
//               <label
//                 htmlFor="photo-upload"
//                 className="flex flex-col items-center cursor-pointer"
//               >
//                 {photoPreview ? (
//                   <img
//                     src={photoPreview}
//                     alt="Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <>
//                     <Camera className="w-8 h-8 text-gray-400" />
//                     <span className="text-sm text-purple-600 mt-2">Upload Photo</span>
//                   </>
//                 )}
//               </label>
//             </div>
//           </div>
//           {errors.photo && (
//             <Alert variant="destructive" className="mt-2">
//               <AlertDescription>{errors.photo}</AlertDescription>
//             </Alert>
//           )}

//           {/* Form Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label htmlFor="productName" className="text-sm font-medium">
//                 Product Name *
//               </label>
//               <Input
//                 id="productName"
//                 placeholder="Enter your product name"
//                 value={formData.productName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, productName: e.target.value })
//                 }
//                 className={errors.productName ? "border-red-500" : ""}
//               />
//               {errors.productName && (
//                 <span className="text-sm text-red-500">{errors.productName}</span>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="batchId" className="text-sm font-medium">
//                 Batch ID *
//               </label>
//               <Input
//                 id="batchId"
//                 placeholder="Enter batch Id"
//                 value={formData.batchId}
//                 onChange={(e) =>
//                   setFormData({ ...formData, batchId: e.target.value })
//                 }
//                 className={errors.batchId ? "border-red-500" : ""}
//               />
//               {errors.batchId && (
//                 <span className="text-sm text-red-500">{errors.batchId}</span>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="quantity" className="text-sm font-medium">
//                 Quantity *
//               </label>
//               <Input
//                 id="quantity"
//                 placeholder="Enter product quantity"
//                 value={formData.quantity}
//                 onChange={(e) =>
//                   setFormData({ ...formData, quantity: e.target.value })
//                 }
//                 className={errors.quantity ? "border-red-500" : ""}
//               />
//               {errors.quantity && (
//                 <span className="text-sm text-red-500">{errors.quantity}</span>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="productionDate" className="text-sm font-medium">
//                 Production Date *
//               </label>
//               <Input
//                 id="productionDate"
//                 type="date"
//                 value={formData.productionDate}
//                 onChange={(e) =>
//                   setFormData({ ...formData, productionDate: e.target.value })
//                 }
//                 className={errors.productionDate ? "border-red-500" : ""}
//               />
//               {errors.productionDate && (
//                 <span className="text-sm text-red-500">{errors.productionDate}</span>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="expiryDate" className="text-sm font-medium">
//                 Expiry Date *
//               </label>
//               <Input
//                 id="expiryDate"
//                 type="date"
//                 value={formData.expiryDate}
//                 onChange={(e) =>
//                   setFormData({ ...formData, expiryDate: e.target.value })
//                 }
//                 className={errors.expiryDate ? "border-red-500" : ""}
//               />
//               {errors.expiryDate && (
//                 <span className="text-sm text-red-500">{errors.expiryDate}</span>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="description" className="text-sm font-medium">
//                 Description
//               </label>
//               <Textarea
//                 id="description"
//                 placeholder="Description"
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           {submitError && (
//             <Alert variant="destructive">
//               <AlertDescription>{submitError}</AlertDescription>
//             </Alert>
//           )}

//           {/* Action Buttons */}
//           <div className="flex justify-between pt-6">
//             <Button
//               type="button"
//               variant="outline"
//               className="w-[200px] text-purple-600 border-purple-600"
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               className="w-[200px] bg-purple-600 hover:bg-purple-700"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Adding Product..." : "Add Product"}
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }