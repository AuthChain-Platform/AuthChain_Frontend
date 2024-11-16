"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col justify-center items-center px-6 py-4 xl:p-10">
      <div className="flex flex-col lg:flex-row lg:items-start w-full ">
  
        <div className="flex flex-col justify-center p-8 lg:p-10 lg:w-7/12 xl:w-5/12">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Verify Product</h1>
          <p className="text-lg mb-8 text-gray-600">
            Scan a product to verify its authenticity and track its journey
            through the supply chain.
          </p>
          <div className="bg-white px-6 py-10 rounded-lg shadow-md">
        
            <div className="flex flex-row justify-center space-x-4 mb-7">
              <Button
                className={`w-full lg:w-1/2 ${
                  activeTab === "manual"
                    ? "bg-[#3D28F3] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab("manual")}
              >
                Manual
              </Button>
              <Button
                className={`w-full lg:w-1/2 ${
                  activeTab === "scanner"
                    ? "bg-[#3D28F3] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab("scanner")}
              >
                Barcode QR Scanner
              </Button>
            </div>

         
            <div className="min-h-[300px] flex flex-col items-center justify-center">
              {activeTab === "manual" && (
                <div className="w-full">
                  <p className="mb-2 text-lg font-medium text-gray-700">
                    Product ID
                  </p>
                  <input
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D28F3]"
                    placeholder="Enter Product ID"
                  />
                  <Button className="bg-[#3D28F3] w-full text-white py-2">
                    Track Product
                  </Button>
                </div>
              )}

              {activeTab === "scanner" && (
                <div className="w-full">
                  <p className="mb-4 text-lg font-medium text-gray-700 text-center">
                    Use the scanner to scan the barcode or QR code
                  </p>
                  <div className="w-full h-[300px] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">
                      [Scanner/Camera Placeholder]
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      
        <div className="flex flex-col justify-center items-center lg:w-6/12 xl:5/12 p-8 lg:p-6">
          <img
            src="/lappy.png"
            alt="Combat Counterfeiting"
            className="w-full lg:w-3/4 h-auto object-contain rounded-lg mb-6"
          />
          <p className="text-center text-gray-600 text-sm">
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
