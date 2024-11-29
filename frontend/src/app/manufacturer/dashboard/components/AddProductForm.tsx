"use client";
import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useActiveAccount, TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { client } from "@/constants/client";
import { lisk } from "@/constants/chain";
import { getContract } from "thirdweb";
import Router from "next/router";
import { useAuthContext } from "@/app/context/authContext";
import { pinata } from "@/constants/pinata";

interface FormErrors {
  [key: string]: string;
}

export default function AddProductForm() {
  const account = useActiveAccount();
  const { setIsProductAdded } = useAuthContext();
  const router = Router;

  const [formData, setFormData] = useState({
    productCode: 0,
    productName: "",
    price: 0,
    batchId: 0,
    expiryDate: "",
    productDescription: "",
    batchQuantity: 0,
    availabilityQuantity: 0,
    productImage: "",
    status: 0,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = URL.createObjectURL(file);
        setFormData((prev) => ({ ...prev, productImage: imageUrl }));
        setErrors((prev) => ({ ...prev, productImage: "" }));
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          productImage: "Failed to process image. Please try again.",
        }));
      }
    }
  };

  const uploadImageToIPFS = async () => {
    if (!formData.productImage) {
      throw new Error("No image file selected");
    }
    // const response = await pinata.upload.file(formData.productImage);
    return `https://ipfs.io/ipfs/${response.IpfsHash}`;
  };

  const productAddress = "0xe71aa05fE1743f8C5db3160Cf3a7d6004E3866aF";

  const contract = getContract({
    client,
    chain: lisk,
    abi: [
      {
        inputs: [
          { internalType: "uint256", name: "_productCode", type: "uint256" },
          { internalType: "string", name: "_name", type: "string" },
          { internalType: "uint256", name: "_price", type: "uint256" },
          { internalType: "uint256", name: "_batchID", type: "uint256" },
          { internalType: "uint256", name: "_expiryDate", type: "uint256" },
          { internalType: "string", name: "_productDescription", type: "string" },
          { internalType: "uint256", name: "_batchQuantity", type: "uint256" },
          { internalType: "uint256", name: "_availableQuantity", type: "uint256" },
          { internalType: "string", name: "_productImage", type: "string" },
          { internalType: "enum ProductManagement.ProductStatus", name: "_status", type: "uint8" },
        ],
        name: "addProduct",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: productAddress,
  });

  const validateForm = () => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.productName) {
      newErrors.productName = "Product name is required";
      isValid = false;
    }
    if (!formData.batchId) {
      newErrors.batchId = "Batch ID is required";
      isValid = false;
    }
    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required";
      isValid = false;
    }
    if (!formData.price) {
      newErrors.price = "Price is required";
      isValid = false;
    }
    if (!formData.productCode) {
      newErrors.productCode = "Product code is required";
      isValid = false;
    }
    if (!formData.productDescription) {
      newErrors.productDescription = "Description is required";
      isValid = false;
    }
    if (!formData.batchQuantity) {
      newErrors.batchQuantity = "Batch quantity is required";
      isValid = false;
    }
    if (!formData.availabilityQuantity) {
      newErrors.availabilityQuantity = "Availability quantity is required";
      isValid = false;
    }
    if (!formData.productImage) {
      newErrors.productImage = "Product image is required";
      isValid = false;
    }
    if (!formData.status) {
      newErrors.status = "Product status is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const imageUrl = await uploadImageToIPFS();
      const transaction =  prepareContractCall({
        contract,
        method: "addProduct",
        params: [
          BigInt(formData.productCode),
          formData.productName,
          BigInt(formData.price),
          BigInt(formData.batchId),
          dateToEpoch(formData.expiryDate),
          formData.productDescription,
          BigInt(formData.batchQuantity),
          BigInt(formData.availabilityQuantity),
          imageUrl,
          formData.status,
        ],
      });
      console.log(transaction);

      if (transaction.receipt.status === 1) {
        setIsProductAdded(true);
        router.push("/products");
      } else {
        throw new Error("Transaction failed.");
      }
    } catch (error: any) {
      setSubmitError("Failed to add product: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const dateToEpoch = (dateString: string) => {
    const epochTime = new Date(dateString).getTime() / 1000;
    return BigInt(epochTime);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Product Image Upload */}
          <div className="flex justify-center mb-8">
            <label htmlFor="productImage" className="cursor-pointer">
              <Camera className="w-16 h-16 text-gray-400" />
              <input
                id="productImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {errors.productImage && (
              <p className="text-red-500 text-sm mt-2">{errors.productImage}</p>
            )}
          </div>
  
          {/* Product Name */}
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product Name *
            </label>
            <Input
              id="productName"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
            />
            {errors.productName && (
              <p className="text-red-500 text-sm mt-2">{errors.productName}</p>
            )}
          </div>
  
          {/* Product Code */}
          <div>
            <label htmlFor="productCode" className="block text-sm font-medium text-gray-700">
              Product Code *
            </label>
            <Input
              id="productCode"
              type="number"
              value={formData.productCode}
              onChange={(e) =>
                setFormData({ ...formData, productCode: parseInt(e.target.value) || 0 })
              }
            />
            {errors.productCode && (
              <p className="text-red-500 text-sm mt-2">{errors.productCode}</p>
            )}
          </div>
  
          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price *
            </label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })
              }
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-2">{errors.price}</p>
            )}
          </div>
  
          {/* Batch ID */}
          <div>
            <label htmlFor="batchId" className="block text-sm font-medium text-gray-700">
              Batch ID *
            </label>
            <Input
              id="batchId"
              type="number"
              value={formData.batchId}
              onChange={(e) =>
                setFormData({ ...formData, batchId: parseInt(e.target.value) || 0 })
              }
            />
            {errors.batchId && (
              <p className="text-red-500 text-sm mt-2">{errors.batchId}</p>
            )}
          </div>
  
          {/* Expiry Date */}
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry Date *
            </label>
            <Input
              id="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={(e) =>
                setFormData({ ...formData, expiryDate: e.target.value })
              }
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm mt-2">{errors.expiryDate}</p>
            )}
          </div>
  
          {/* Product Description */}
          <div>
            <label
              htmlFor="productDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Product Description *
            </label>
            <Textarea
              id="productDescription"
              value={formData.productDescription}
              onChange={(e) =>
                setFormData({ ...formData, productDescription: e.target.value })
              }
            />
            {errors.productDescription && (
              <p className="text-red-500 text-sm mt-2">{errors.productDescription}</p>
            )}
          </div>
  
          {/* Batch Quantity */}
          <div>
            <label htmlFor="batchQuantity" className="block text-sm font-medium text-gray-700">
              Batch Quantity *
            </label>
            <Input
              id="batchQuantity"
              type="number"
              value={formData.batchQuantity}
              onChange={(e) =>
                setFormData({ ...formData, batchQuantity: parseInt(e.target.value) || 0 })
              }
            />
            {errors.batchQuantity && (
              <p className="text-red-500 text-sm mt-2">{errors.batchQuantity}</p>
            )}
          </div>
  
          {/* Available Quantity */}
          <div>
            <label
              htmlFor="availabilityQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Available Quantity *
            </label>
            <Input
              id="availabilityQuantity"
              type="number"
              value={formData.availabilityQuantity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  availabilityQuantity: parseInt(e.target.value) || 0,
                })
              }
            />
            {errors.availabilityQuantity && (
              <p className="text-red-500 text-sm mt-2">
                {errors.availabilityQuantity}
              </p>
            )}
          </div>
  
          {/* Product Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Product Status *
            </label>
            <Input
              id="status"
              type="number"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: parseInt(e.target.value) || 0 })
              }
            />
            {errors.status && (
              <p className="text-red-500 text-sm mt-2">{errors.status}</p>
            )}
          </div>
  
          {/* Submit Button */}
          <div>
            {submitError && (
              <Alert variant="destructive">
                <AlertDescription>{submitError}</AlertDescription>
              </Alert>
            )}
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Add Product"}
            </Button>
          </div>
        </div>
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
// import { useActiveAccount, TransactionButton } from "thirdweb/react";
// import { prepareContractCall } from "thirdweb";
// import { client } from "@/constants/client";
// import { lisk } from "@/constants/chain";
// import { getContract } from "thirdweb";
// import Router from "next/router";
// import { useAuthContext } from "@/app/context/authContext";
// import { pinata } from "@/constants/pinata";


// interface FormErrors {
//   [key: string]: string;
// }


// export default function AddProductForm() {
//   const account = useActiveAccount();
//   const { setIsProductAdded } = useAuthContext();
//   const router = Router;

 

//   const [formData, setFormData] = useState({
//     productCode: 0,
//     productName: "",
//     price: 0,
//     batchId: 0,
//     expiryDate: "",
//     productDescription: "",
//     batchQuantity: 0,
//     availabilityQuantity: 0,
//     productImage: "",
//     status: 0,
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState("");



//   const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       try {
//         setFormData((prev) => ({ ...prev, image: file.name }));
//         setErrors((prev) => ({ ...prev, image: "" }));
//       } catch (error) {
//         setErrors((prev) => ({
//           ...prev,
//           image: "Failed to process image. Please try again.",
//         }));
//       }
//     }
//   };


//   const uploadImageToIPFS = async () => {
//     if (!formData.productImage) {
//       throw new Error("No image file selected");
//     }
//     const buffer = await (await fetch(formData.productImage)).arrayBuffer();
//     // Create a new File object
//     const file = new File([buffer], (formData.productImage as unknown as File).name, {
//       type: (formData.productImage as unknown as File).type,
//     });

//     const response = await pinata.upload.file(file);
//     return `https://ipfs.io/ipfs/${response.IpfsHash}`;

//   };

//   const productAddress = "0xe71aa05fE1743f8C5db3160Cf3a7d6004E3866aF";

//   const contract = getContract({
//     client,
//     chain: lisk,
//     abi: [
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "_productCode",
//             "type": "uint256"
//           },
//           {
//             "internalType": "string",
//             "name": "_name",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_price",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_batchID",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_expiryDate",
//             "type": "uint256"
//           },
//           {
//             "internalType": "string",
//             "name": "_productDescription",
//             "type": "string"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_batchQuantity",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_availableQuantity",
//             "type": "uint256"
//           },
//           {
//             "internalType": "string",
//             "name": "_productImage",
//             "type": "string"
//           },
//           {
//             "internalType": "enum ProductManagement.ProductStatus",
//             "name": "_status",
//             "type": "uint8"
//           }
//         ],
//         "name": "addProduct",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//     ],
//     address: productAddress,
//   });

//   const validateForm = () => {
//     const newErrors = { ...errors };
//     let isValid = true;

//     if (!formData.productName) {
//       newErrors.prouctName = "Product name is required";
//       isValid = false;
//     }
//     if (!formData.batchId) {
//       newErrors.batchId = "Batch ID is required";
//       isValid = false;
//     }
//     if (!formData.expiryDate) {
//       newErrors.expiryDate = "Quantity is required";
//       isValid = false;
//     }
//     if (!formData.price) {
//       newErrors.price = "Production date is required";
//       isValid = false;
//     }
//     if (!formData.productCode) {
//       newErrors.productCode = "Expiry date is required";
//       isValid = false;
//     }
//     if (!formData.productDescription) {
//       newErrors.productDescription = "Description is required";
//       isValid = false;
//     }
//     if (!formData.batchQuantity) {
//       newErrors.batchQuantity = "Batch quantity is required";
//       isValid = false;
//     }
//     if (!formData.availabilityQuantity) {
//       newErrors.availabilityQuantity = "Availability quantity is required";
//       isValid = false;
//     }
//     if (!formData.productImage) {
//       newErrors.productImage = "Product image is required";
//       isValid = false;
//     }
//     if (!formData.status) {
//       newErrors.status = "Product status is required";
//       isValid = false;
//     }

   
//     setErrors(newErrors);
//     return isValid;
//   };

//   // Function to convert datetime to epoch
//   const dateToEpoch = (dateString: string) => {
//     const myDate = new Date(dateString);
//     const epochTime = myDate.getTime() / 1000.0;
//     return BigInt(epochTime);
//   };

  

//   return (
//     <Card className="w-full max-w-4xl mx-auto">
//       <CardContent className="p-6">
//         <div className="space-y-6">
//           {/* Form Fields */}
//          {/* Photo Upload Section */}
//          <div className="flex justify-center mb-8">
//             {/* <div className="relative w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
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
//             </div> */}

//           </div>
//           {/* {errors.photo && (
//             <Alert variant="destructive" className="mt-2">
//               <AlertDescription>{errors.photo}</AlertDescription>
//             </Alert>
//           )} */}

//           {/* Form Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label htmlFor="productName" className="text-sm font-medium">
//                 Product Name *
//               </label>
//               <Input
//                 id="productName"
//                 type="text"
//                 placeholder="Enter your product name"
//                 value={formData.productName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, productName:  e.target.value})
//                 }
//                 className={errors.productName ? "border-red-500" : ""}
//               />
//               {errors.productName && (
//                 <p className="text-sm text-red-500">{errors.productName}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="batchId" className="text-sm font-medium">
//                 Batch ID *
//               </label>
//               <Input
//                 id="batchId"
//                 type="number"
//                 placeholder="Enter batch Id"
//                 value={formData.batchId}
//                 onChange={(e) =>
//                   setFormData({ ...formData, batchId:  Number(e.target.value) })
//                 }
//                 className={errors.batchId ? "border-red-500" : ""}
//               />
//               {errors.batchId && (
//                 <p className="text-sm text-red-500">{errors.batchId}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="quantity" className="text-sm font-medium">
//                 Price *
//               </label>
//               <Input
//                 id="quantity"
//                 type="number"
//                 placeholder="Enter product quantity"
//                 value={formData.price}
//                 onChange={(e) =>
//                   setFormData({ ...formData, price:  Number(e.target.value) })
//                 }
//                 className={errors.quantity ? "border-red-500" : ""}
//               />
//               {errors.quantity && (
//                 <p className="text-sm text-red-500">{errors.quantity}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="Expiry Date" className="text-sm font-medium">
//                 Expiry Date *
//               </label>
//               <Input
//                 id="Expiry Date"
//                 type="datetime-local"
//                 value={formData.expiryDate}
//                 onChange={(e) =>
//                   setFormData({ ...formData, expiryDate:  e.target.value })
//                 }
//                 className={errors.expiryDate ? "border-red-500" : ""}
//               />
//               {errors.expiryDate && (
//                 <p className="text-sm text-red-500">{errors.expiryDate}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="expiryDate" className="text-sm font-medium">
//                 Product Code *
//               </label>
//               <Input
//                 id="productCode"
//                 type="number"
//                 value={formData.productCode}
               
//                 onChange={(e) =>
//                   setFormData({ ...formData, productCode:  Number(e.target.value) })
//                 }
//                 className={errors.expiryDate ? "border-red-500" : ""}
//               />
//               {errors.productCode && (
//                 <p className="text-sm text-red-500">{errors.productCode}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="description" className="text-sm font-medium">
//                 Product Description
//               </label>
//               <Textarea
//                 id="productDescription"
//                 placeholder="Description"
//                 value={formData.productDescription}
//                 onChange={(e) =>
//                   setFormData({ ...formData, productDescription: e.target.value })
//                 }
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="expiryDate" className="text-sm font-medium">
//                 Batch Quality *
//               </label>
//               <Input
//                 id="batchQuantity"
//                 type="number"
//                 value={formData.batchQuantity}
//                 onChange={(e) =>
//                   setFormData({ ...formData, batchQuantity:  Number(e.target.value) })
//                 }
//                 className={errors.batchQuantity ? "border-red-500" : ""}
//               />
//               {errors.batchQuality && (
//                 <p className="text-sm text-red-500">{errors.batchQuality}</p>
//               )}
//             </div>


//             <div className="space-y-2">
//               <label htmlFor="expiryDate" className="text-sm font-medium">
//                 Availability Quantity *
//               </label>
//               <Input
//                 id="availabilityQuantity"
//                 type="number"
//                 value={formData.availabilityQuantity}
//                 onChange={(e) =>
//                   setFormData({ ...formData, availabilityQuantity:  Number(e.target.value) })
//                 }
//                 className={errors.availabilityQuantity ? "border-red-500" : ""}
//               />
//               {errors.availabilityQuantity && (
//                 <p className="text-sm text-red-500">{errors.availabilityQuantity}</p>
//               )}
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
           

//             <TransactionButton
//                 transaction={async() =>
                  
                 
//                   prepareContractCall({
//                     contract,
//                     method: "addProduct",
//                     params: [
//                       BigInt(formData.productCode),
//                       formData.productName,
//                       BigInt(formData.price),
//                       BigInt(formData.batchId),
//                       dateToEpoch(formData.expiryDate),
//                       formData.productDescription,
//                       BigInt(formData.batchQuantity),
//                       BigInt(formData.availabilityQuantity),
//                       // await uploadImageToIPFS(),
//                       "https://ipfs.io/ipfs/bafybeifvlsvc5g3staanjseaxxe5a6djsi44rca3zvtko3ya7z2a7kkgle",
//                       0,
//                     ],
//                   })
//                 }
//                 onError={(error) => {
//                   setSubmitError(error.message);
//                   setIsSubmitting(false);
//                 }}
//                 onTransactionConfirmed={() => {
//                   router.push("/manufacturer/products");
//                   setIsProductAdded(true);
//                 }}
//                 disabled={!account || isSubmitting}
//                 className="w-[200px] bg-purple-600 hover:bg-purple-700"
//               >
//                 {!account ? "Connect Wallet" :
//                    isSubmitting
//                   ? "Adding Product.."
//                   : "Add Product"}
//               </TransactionButton>
//           </div>
//         </div>

//       </CardContent>
//     </Card>
//   );
// }