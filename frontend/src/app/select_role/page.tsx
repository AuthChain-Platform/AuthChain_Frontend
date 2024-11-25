"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {useAuthContext} from "../context/authContext";
import { useActiveAccount, TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { client } from "@/constants/client";
import { lisk } from "@/constants/chain"; 
import {getContract} from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Define role routes in a type-safe way
const ROLE_ROUTES = {
  2: '/manufacturer/complete_reg',
  5: '/distributor/complete_reg'
} as const;

export default function SelectRole() {

  const { mutate: sendTransaction } = useSendTransaction();
  const router = useRouter();
  const [role, setRole] = useState(0);
  const {setUserRole} = useAuthContext();
  const account = useActiveAccount();
  const userRoleAddress = "0x9b17d06296D01ab7BD42e2e55a517980fFFE9c61";

const contract = getContract({
  client: client,
  chain: lisk,
  abi: [ 
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "enum UserRoleManager.userRole",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "assignRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
  ],
  address: userRoleAddress as string,
});



useEffect(() => {
  if (!account) {
    router.push('/');
  }
}, [account, router]);
 


useEffect(() => {
  if (!userRoleAddress) {
    router.push('/');
  }
}, [account, router]);


const handleRouting = (selectedRole: number) => {
  const route = ROLE_ROUTES[selectedRole as keyof typeof ROLE_ROUTES];
  if (route) {
    router.push(route);
  }
};

  return (
    <div className="grid">

    <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
   
      <div className="flex flex-col p-16 bg-white shadow-lg w-1/2 rounded-md">
        <p className="text-4xl mb-8 text-gray-700 text-center font-semibold">Select Your Role</p>
        <select
          className="p-3 border rounded mb-10 w-full"
          value={role}
          onChange={(e) => setRole(Number(e.target.value))}
        >
          <option value={0}>Select Role</option>
          <option value={2}>Manufacturer</option>
          <option value={5}>Distributor</option>
        </select>
        
        <TransactionButton
          transaction={() => prepareContractCall({
            contract: contract,
            method: "assignRole",
            params: [String(account?.address), role]
          })}
          onError={(error)=> {
console.log({error})
          }}
          onTransactionConfirmed={(reciept) => { 
            console.log({reciept})
            toast.success("Role assigned successfully!");
            setUserRole(String(role));
            handleRouting(role);
            
          }}
          // onError={(error) => toast.error(`Error: ${error.message}`)}
          disabled={!role || !account}
          className="p-3 bg-[#2711F1] text-white rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {!account ? "Connect Wallet" : !role ? "Select Role" : "Proceed"}
        </TransactionButton>
        
      </div>
    </div>
        <ToastContainer />
    </div>
  );
};
