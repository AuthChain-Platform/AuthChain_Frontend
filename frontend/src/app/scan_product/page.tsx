"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Html5QrcodeScanner, Html5QrcodeResult } from "html5-qrcode";
import Navbar from "../components/Navbar";
import GeneralSidebar from "./GeneralSidebar";

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
}

const Page = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [scanner, setScanner] = useState<any>(null);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const [previewState, setPreviewState] = useState<PreviewState>({
    isLoading: true,
    isError: false,
    isImage: false,
  });

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
              width: 250,
              height: 250,
            },
          };

          const newScanner = new Html5QrcodeScanner("reader", config, false);

          const success = (result: string) => {
            newScanner.clear();
            setScanResult(result);
          };

          const error = (error: string) => {
            console.error(error);
          };

          newScanner.render(success, error);
          setScanner(newScanner);
        } catch (err) {
          console.error("Failed to initialize scanner:", err);
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
    return null; // Return null on server-side render
  }

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
      <Navbar />
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
                  {scanResult.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i) ? (
                    <img
                      src={scanResult}
                      alt="Scanned Result"
                      className={`max-w-full h-auto rounded-lg shadow-sm transition-opacity duration-300 ${
                        previewState.isLoading ? "opacity-0" : "opacity-100"
                      }`}
                      onLoad={() => {
                        setPreviewState({
                          isLoading: false,
                          isError: false,
                          isImage: true,
                        });
                      }}
                      onError={() => {
                        setPreviewState({
                          isLoading: false,
                          isError: true,
                          isImage: true,
                        });
                      }}
                    />
                  ) : (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-lg font-medium break-all">
                        {scanResult}
                      </p>
                    </div>
                  )}

                  {previewState.isError && (
                    <div className="mt-2 text-red-500">
                      Unable to load image. The URL might be invalid or
                      inaccessible.
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
                      {previewState.isImage
                        ? "Open Image in New Tab"
                        : "Open Link"}
                    </a>
                  )}

                  <button
                    onClick={() => {
                      setScanResult(null);
                      setPreviewState({
                        isLoading: true,
                        isError: false,
                        isImage: false,
                      });
                    }}
                    className="block w-full px-4 py-2 mt-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                  >
                    Scan Another Code
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
