"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Html5QrcodeScanner, Html5QrcodeResult } from "html5-qrcode";
import Navbar from "../components/Navbar";
import GeneralSidebar from "./GeneralSidebar";
import { getContract, prepareContractCall } from "thirdweb";
import { lisk } from "@/constants/chain";
import { client } from "@/constants/client";
import { useReadContract } from "thirdweb/react";
import { ThirdwebSDK, TransactionError } from "@thirdweb-dev/sdk";
import ProductCard from "../components/ProductCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface QRScannerConfig {
  fps: number;
  qrbox: {
    width: number;
    height: number;
  };
}

interface PreviewState {
  isLoading: boolean;
  isError: boolean;
  isImage: boolean;
  errorMessage: string | null;
}

const Page = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [scanner, setScanner] = useState<any>(null);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sdk = new ThirdwebSDK("lisk-sepolia-testnet");
  const [productData, setProductData] = useState(null);
  const ABI = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "productCode",
          type: "uint256",
        },
      ],
      name: "getProductDetails",
      outputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "batchID",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "expiryDate",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "productDescription",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "availableQuantity",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "productImage",
          type: "string",
        },
        {
          internalType: "enum ProductManagement.ProductStatus",
          name: "status",
          type: "uint8",
        },
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "trackingID",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const handleManualFetch = async (productId: string) => {
    setPreviewState((prev) => ({ ...prev, isLoading: true }));
    try {
      const contract = await sdk.getContract(
        "0x4456ce0eBadB36Ad298Ff19ce4aC18075c4407Cb",
        ABI
      );
      const data = await contract.call("getProductDetails", [
        BigInt(productId),
      ]);
      setProductData(data);
    } catch (error) {
      setPreviewState((prev) => ({
        ...prev,
        isError: true,
        errorMessage: "Error Fetching Product Details",
      }));
    } finally {
      setPreviewState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const [previewState, setPreviewState] = useState<PreviewState>({
    isLoading: true,
    isError: false,
    errorMessage: null,
    isImage: false,
  });

    const fetchProductDetails = async (productCode: string | number) => {
    setPreviewState((prev) => ({ ...prev, isLoading: true, isError: false }));
    try {
      const contract = await sdk.getContract(
        "0x4456ce0eBadB36Ad298Ff19ce4aC18075c4407Cb",
        ABI
      );
      const data = await contract.call("getProductDetails", [BigInt(productCode)]);
      console.log({ data });
      setProductData(data);
      setPreviewState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      console.error("Smart contract error: ", error);
      setPreviewState((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
        errorMessage:
          (error as TransactionError)?.reason ??
          "An error occurred while fetching product details",
      }));
    }
  };

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (scanner) {
        scanner.clear();
      }
    };
  }, [scanner]);

  useEffect(() => {
    if (isMounted && activeTab === "scanner") {
      const initializeScanner = async () => {
        try {
          // Dynamically import the scanner only on client side
          const { Html5QrcodeScanner } = await import("html5-qrcode");

          const config: QRScannerConfig = {
            fps: 20,
            qrbox: {
              width: 1500,
              height: 1500,
            },
          };

          const newScanner = new Html5QrcodeScanner("reader", config, false);

          const success = async (result: string) => {
            newScanner.clear();

            setScanResult(result);
           console.log({result: BigInt(result)})
          fetchProductDetails(result);
           setPreviewState((prev)=> ({
            ...prev,
            isLoading:true
          }))
          try {
            const contract = await sdk.getContract("0x4456ce0eBadB36Ad298Ff19ce4aC18075c4407Cb", ABI);
            const data = await contract.call("getProductDetails", [BigInt(result)])
            console.log({data})
            setProductData(data)
            setPreviewState((prev)=> ({
              ...prev,
              isLoading: true,
            }));
            try {
              const contract = await sdk.getContract(
                "0x4456ce0eBadB36Ad298Ff19ce4aC18075c4407Cb",
                ABI
              );
              const data = await contract.call("getProductDetails", [
                BigInt(result),
              ]);
              console.log({ data });
              setProductData(data);
              setPreviewState((prev) => ({
                ...prev,
                isLoading: false,
              }));
            } catch (error) {
              console.error("Smart contract error: ", error);
              setPreviewState((prev) => ({
                ...prev,
                isLoading: false,
                isError: true,
                errorMessage:
                  (error as TransactionError)?.reason ||
                  "An error occured when fetching",
              }));
            }
          };

          const error = (error: string) => {
            console.error(error);

            setPreviewState((prev) => ({
              ...prev,
              isLoading: false,
              // isError:true,
              // errorMessage: error
            }));
          };

          newScanner.render(success, error);
          setScanner(newScanner);
        } catch (err: any) {
          console.error("Failed to initiaSorrylize scanner:", err);
          setPreviewState((prev) => ({
            ...prev,
            isLoading: false,
            isError: true,
            errorMessage: "An error occured",
          }));
        }
      };

      initializeScanner();
    }

    return () => {
      if (scanner) {
        scanner.clear().catch((err: any) => {
          console.error("Failed to clear scanner:", err);
        });
      }
    };
  }, [isMounted, activeTab]);

  if (!isMounted) {
    return null; // this returns null on server-side render
  }

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
      <Navbar />
      <ToastContainer/>

      <div className="flex flex-1">
        <GeneralSidebar />

        <div className="flex flex-col lg:flex-row lg:items-start w-full ">
          <div className="flex flex-col justify-center p-8 lg:p-10 lg:w-7/12 xl:w-5/12">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Verify Product
            </h1>
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
                       onChange={(e) => setScanResult(e.target.value)}
                    />
                    <Button className="bg-[#3D28F3] w-full text-white py-2"
                      onClick={() => {
                              if (scanResult) {
                                fetchProductDetails(scanResult);
                              } else {
                                toast.error("Please enter a valid Product ID.");
                              }
                            }}>
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
                      <p id="reader" className="text-gray-500">
                        [Scanner/Camera Placeholder]
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center lg:w-6/12 xl:5/12 p-8 lg:p-6">
            {scanResult && (
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Scan Result</h2>

                <div className="relative mb-4">
                  {previewState.isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  )}

                  {/* Check if the result might be an image */}
                  {
                    scanResult.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i) && (
                      <img
                        src={scanResult}
                        alt="Scanned Result"
                        className={`max-w-full h-auto rounded-lg shadow-sm transition-opacity duration-300 ${
                          previewState.isLoading ? "opacity-0" : "opacity-100"
                        }`}
                        // onLoad={() => {

                        // }}
                        // onError={() => {
                        //   setPreviewState({
                        //     isLoading: false,
                        //     isError: true,
                        //     isImage: true,
                        //   });
                        // }}
                      />
                    )
                    // : (
                    //   <div className="p-4 bg-gray-50 rounded-lg">
                    //     <p className="text-lg font-medium break-all">
                    //       {scanResult}
                    //     </p>
                    //   </div>
                    // )
                  }

                  {previewState.isError && (
                    <div className="mt-2 text-red-500">
                      {previewState.errorMessage}
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  {scanResult.startsWith("http") && (
                    <a
                      href={scanResult}
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {scanResult.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i)
                        ? "Open Image in New Tab"
                        : "Open Link"}
                    </a>
                  )}

                  <button
                    onClick={() => {
                      setScanResult(null);
                      // setPreviewState({
                      //   isLoading: true,
                      //   isError: false,
                      //   isImage: false,
                      // });
                    }}
                    className="block w-full px-4 py-2 mt-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                  >
                    Scan Another Code
                  </button>
                </div>
              </div>
            )}
          </div>
          {productData && (
            <ProductCard
              brandName={productData[0]}
              price={parseInt(productData[1]["_hex"], 16)}
              productDescription={productData[4]}
              owner={productData[8]}
              trackingID={parseInt(productData[9]["_hex"], 16)}
              batchID={parseInt(productData[2]["_hex"], 16)}
              expiryDate={new Date(
                parseInt(productData[3]["_hex"], 16) * 1000
              ).toLocaleString("en-US")}
            />
          )}
          {/* {} */}
        </div>
      </div>
    </div>
  );
};

export default Page;
