"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useActiveAccount, TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { client } from "@/constants/client";
import { lisk } from "@/constants/chain";
import { getContract } from "thirdweb";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/app/context/authContext";
import { Camera } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { pinata } from "@/constants/pinata";

const productAddress = "0xe71aa05fE1743f8C5db3160Cf3a7d6004E3866aF";

const SetupForm = () => {
  const account = useActiveAccount();
  const router = useRouter();
  const { setIsRegistered, isRegistered } = useAuthContext();

  // Form state
  const [formData, setFormData] = useState({
    brandName: "",
    nafdacNo: "",
    registrationNo: "",
    yearOfRegistration: 0,
    location: "",
    state: "",
    image: "",
  });

  useEffect(() => {
    if (isRegistered == true) {
      router.push('/manufacturer/dashboard');
    }
  }, [isRegistered, router]);
  

  // Error state
  const [errors, setErrors] = useState({
    brandName: "",
    nafdacNo: "",
    registrationNo: "",
    yearOfRegistration: "",
    location: "",
    state: "",
    image: "",
  });

  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contract = getContract({
    client,
    chain: lisk,
    abi: [
      {
        inputs: [
          { internalType: "string", name: "brandName", type: "string" },
          { internalType: "string", name: "nafdac_no", type: "string" },
          { internalType: "string", name: "registration_no", type: "string" },
          { internalType: "uint256", name: "yearOfRegistration", type: "uint256" },
          { internalType: "string", name: "location", type: "string" },
          { internalType: "string", name: "state", type: "string" },
          { internalType: "string", name: "image", type: "string" },
        ],
        name: "registerManufacturer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: productAddress,
  });

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value ? Number(value) : 0,
    }));
  };

  const handleStringInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setFormData((prev) => ({ ...prev, image: file.name }));
        setErrors((prev) => ({ ...prev, image: "" }));
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          image: "Failed to process image. Please try again.",
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.brandName) {
      newErrors.brandName = "Brand name is required";
      isValid = false;
    }

    if (!formData.nafdacNo) {
      newErrors.nafdacNo = "NAFDAC number is required";
      isValid = false;
    }

    if (!formData.registrationNo) {
      newErrors.registrationNo = "Registration number is required";
      isValid = false;
    }

    if (!formData.yearOfRegistration) {
      newErrors.yearOfRegistration = "Year of registration is required";
      isValid = false;
    }

    if (!formData.location) {
      newErrors.location = "Location is required";
      isValid = false;
    }

    if (!formData.state) {
      newErrors.state = "State is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const uploadImageToIPFS = async () => {
    if (!formData.image) {
      throw new Error("No image file selected");
    }
    const buffer = await (await fetch(formData.image)).arrayBuffer();
    // Create a new File object
    const file = new File([buffer], (formData.image as unknown as File).name, {
      type: (formData.image as unknown as File).type,
    });

    const response = await pinata.upload.file(file);
    return `https://ipfs.io/ipfs/${response.IpfsHash}`;

  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto mt-8">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Complete Your Setup</h1>
            <span className="text-gray-500">2/2</span>
          </div>

          {submitError && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{submitError}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={(e) => e.preventDefault()}>
            {/* <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={`w-full flex justify-center  ${errors.image ? "border-red-500" : ""}`}
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
              </div>
            </div> */}

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Brand Name Input */}
                <div className="space-y-2">
                  <label className="text-gray-600">Brand Name</label>
                  <Input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleStringInputChange}
                    placeholder="Enter your brand name"
                    className={errors.brandName ? "border-red-500" : ""}
                  />
                  {errors.brandName && (
                    <p className="text-red-500 text-sm">{errors.brandName}</p>
                  )}
                </div>

                {/* Location Input */}
                <div className="space-y-2">
                  <label className="text-gray-600">Location</label>
                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleStringInputChange}
                    placeholder="Enter location"
                    className={errors.location ? "border-red-500" : ""}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm">{errors.location}</p>
                  )}
                </div>

                {/* Registration Number Input */}
                <div className="space-y-2">
                  <label className="text-gray-600">Registration Number</label>
                  <Input
                    type="text"
                    name="registrationNo"
                    value={formData.registrationNo}
                    onChange={handleStringInputChange}
                    placeholder="Enter registration number"
                    className={errors.registrationNo ? "border-red-500" : ""}
                  />
                  {errors.registrationNo && (
                    <p className="text-red-500 text-sm">{errors.registrationNo}</p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* NAFDAC Number Input */}
                <div className="space-y-2">
                  <label className="text-gray-600">NAFDAC Number</label>
                  <Input
                    type="text"
                    name="nafdacNo"
                    value={formData.nafdacNo}
                    onChange={handleStringInputChange}
                    placeholder="Enter NAFDAC number"
                    className={errors.nafdacNo ? "border-red-500" : ""}
                  />
                  {errors.nafdacNo && (
                    <p className="text-red-500 text-sm">{errors.nafdacNo}</p>
                  )}
                </div>

                {/* Year of Registration Input */}
                <div className="space-y-2">
                  <label className="text-gray-600">Year of Registration</label>
                  <Input
                    type="number"
                    name="yearOfRegistration"
                    value={formData.yearOfRegistration || ""}
                    onChange={handleNumberInputChange}
                    placeholder="Enter year of registration"
                    className={errors.yearOfRegistration ? "border-red-500" : ""}
                  />
                  {errors.yearOfRegistration && (
                    <p className="text-red-500 text-sm">
                      {errors.yearOfRegistration}
                    </p>
                  )}
                </div>

                {/* State Input */}
                <div className="space-y-2">
                  <label className="text-gray-600">State</label>
                  <Input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleStringInputChange}
                    placeholder="Enter state"
                    className={errors.state ? "border-red-500" : ""}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm">{errors.state}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                className="w-40 text-indigo-600 border-indigo-600"
                onClick={handleCancel}
                type="button"
              >
                Cancel
              </Button>

              <TransactionButton
                transaction={async() =>
                 
                  prepareContractCall({
                    contract,
                    method: "registerManufacturer",
                    params: [
                      formData.brandName,
                      formData.nafdacNo,
                      formData.registrationNo,
                      BigInt(formData.yearOfRegistration),
                      formData.location,
                      formData.state,
                      // await uploadImageToIPFS(),
                      "https://ipfs.io/ipfs/bafybeifvlsvc5g3staanjseaxxe5a6djsi44rca3zvtko3ya7z2a7kkgle",
                    ],
                  })
                }
                onError={(error) => {
                  setSubmitError(error.message);
                  setIsSubmitting(false);
                }}
                onTransactionConfirmed={() => {
                  router.push("/manufacturer/dashboard");
                  setIsRegistered(true);
                }}
                disabled={!account || isSubmitting}
                className="p-3 bg-[#2711F1] text-white rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {!account
                  ? "Connect Wallet"
                  : isSubmitting
                  ? "Submitting..."
                  : "Submit"}
              </TransactionButton>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SetupForm;