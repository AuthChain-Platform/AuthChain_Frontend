import { Metadata } from "next";
import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import { useReadContract } from "thirdweb/react";
// import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { lisk } from "@/constants/chain"; 
import { client } from "@/constants/client";
import {getContract} from "thirdweb";
import { ThirdwebSDK, TransactionError } from "@thirdweb-dev/sdk";

// const CONTRACT_ADDRESS = "0x4456ce0eBadB36Ad298Ff19ce4aC18075c4407Cb";

interface PreviewState {
  isLoading: boolean;
  isError: boolean;
  isImage: boolean;
  errorMessage: string | null;
}

const ABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_productCode",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_batchID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_expiryDate",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_productDescription",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_batchQuantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_availableQuantity",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_productImage",
        "type": "string"
      },
      {
        "internalType": "enum ProductManagement.ProductStatus",
        "name": "_status",
        "type": "uint8"
      }
    ],
    "name": "addProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
];

const [previewState, setPreviewState] = useState<PreviewState>({
  isLoading: true,
  isError: false,
  errorMessage: null,
  isImage: false,
});

export const metadata: Metadata = {
  title: "Add Product",
  description: "Add a new product to your inventory",
};

export default function AddProductPage() {
  const [productData, setProductData] = useState(null);

  const handleFormData = async (data: any) => {
    setPreviewState((prev) => ({ ...prev, isLoading: true }));
    
    console.log("Received product data:", data);

    const sdk = new ThirdwebSDK("lisk-sepolia-testnet");

    try{
      const contract = await sdk.getContract("0x4456ce0eBadB36Ad298Ff19ce4aC18075c4407Cb", ABI);

      const {
        _productCode,
        _name,
        _price,
        _batchID,
        _expiryDate,
        _productDescription,
        _batchQuantity,
        _availableQuantity,
        _productImage,
      } = data;

      const tx = await contract.call("addProduct", [
        _productCode,
        _name,
        BigInt(_price),
        BigInt(_batchID),
        BigInt(_expiryDate),
        _productDescription,
        BigInt(_batchQuantity),
        BigInt(_availableQuantity),
        _productImage
      ]);

      setProductData(data);
      console.log("The data entered are:::", productData)

    } catch(error) {
      setPreviewState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Error Fetching Product Details",
      }));
    } finally {
      setPreviewState((prev) => ({ ...prev, isLoading: false }));
    }

    

    // const tx = await contract.call("addProduct", [
    //   name,
    //   BigInt(price),
    //   BigInt(batchID),
    //   BigInt(expiryDate),
    //   productDescription,
    //   BigInt(availableQuantity),
    //   productImage,
    // ]);

    // return tx;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1">
        <main className="p-8">
          <h1 className="text-2xl font-semibold mb-8">Add Product</h1>
          <AddProductForm onFormSubmit={handleFormData} />
        </main>
      </div>
    </div>
  );
}

// import { Metadata } from "next"
// import AddProductForm from "../components/AddProductForm"

// export const metadata: Metadata = {
//   title: "Add Product",
//   description: "Add a new product to your inventory",
// }

// export default function AddProductPage() {
//   return (
//     <div className="flex min-h-screen bg-gray-50">

//       <div className="flex-1">

//         <main className="p-8">
//           <h1 className="text-2xl font-semibold mb-8">Add Product</h1>
//           <AddProductForm />
//         </main>
//       </div>
//     </div>
//   )
// }
