"use client";

import React, {useEffect, useState} from 'react';
import { useRouter } from "next/navigation";
import { useActiveAccount, TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { client } from "@/constants/client";
import { lisk } from "@/constants/chain"; 
import {getContract} from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuthContext } from '@/app/context/authContext';
import { Camera } from 'lucide-react';
import Navbar from '@/app/components/Navbar';

const SetupForm = () => {

  const account = useActiveAccount();
  const router = useRouter();

  const {userRole} = useAuthContext();


  useEffect(() => {
    if (!account) {
      router.push('/');
    }
  }, [account, router]);

  useEffect(() => {
    if (!userRole) {
      router.push('/select_role');
    }
  }, [account, router]);
  

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };


  const handleClick = () => {
    router.push("/manufacturer/dashboard");
  };


  return (
    <div className='grid'>
       {/* <Navbar /> */}
    <div className="min-h-screen bg-gray-50 py-16 px-4"> 
      <div className="max-w-4xl mx-auto mt-8">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Complete Your Setup</h1>
            <span className="text-gray-500">2/2</span>
          </div>

          <form onSubmit={handleSubmit}>
           
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <div className="text-center mb-8">
              <span className="text-indigo-600">Upload Photo</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
              <div className="space-y-6">
                <div className="space-y-2">

                  <label className="text-gray-600">Brand Name</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your product name"
                    className="w-full"
                  />

                </div>

                <div className="space-y-2">


                  <label className="text-gray-600">Country/Region</label>
                  <Input 
                    type="text" 
                    placeholder="Enter product quantity"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-600">Registration Number</label>
                  <Input 
                    type="text" 
                    placeholder="Enter expiry date"
                    className="w-full"
                  />
                </div>
              </div>

         
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-gray-600">Company Address</label>
                  <Input 
                    type="text" 
                    placeholder="Enter batch id"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-600">Date Established</label>
                  <Input 
                    type="text" 
                    placeholder="Enter production date"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-600">Email Address</label>
                  <Input 
                    type="text" 
                    placeholder="Description"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                className="w-40 text-indigo-600 border-indigo-600"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="w-40 bg-indigo-600 hover:bg-indigo-700"
                onClick={handleClick}
              >
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default SetupForm;