"use client";
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



const metadata: Metadata = {
  title: "Add Product",
  description: "Add a new product to your inventory",
};

export default function AddProductPage() {

  

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1">
        <main className="p-8">
          <h1 className="text-2xl font-semibold mb-8">Add Product</h1>
          <AddProductForm  />
        </main>
      </div>
    </div>
  );
}

