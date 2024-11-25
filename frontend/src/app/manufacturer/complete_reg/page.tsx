"use client";

import React, { useEffect, useState } from "react";
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

const REG_ROUTE = {
  7: '/manufacturer/dashboard'
}

const SetupForm = () => {
  const account = useActiveAccount();
  const router = useRouter();
  const { setIsRegistered } = useAuthContext();

  const productAddress = "0xe71aa05fE1743f8C5db3160Cf3a7d6004E3866aF";

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

  // Error state
  const [errors, setErrors] = useState<{
    brandName: string;
    nafdacNo: string;
    registrationNo: string;
    yearOfRegistration: string;
    location: string;
    state: string;
    image: string;
  }>({
    brandName: "",
    nafdacNo: "",
    registrationNo: "",
    yearOfRegistration: "",
    location: "",
    state: "",
    image: "",
  });

  const [submitError, setSubmitError] = useState("");

  const contract = getContract({
    client: client,
    chain: lisk,
    abi: [
      {
        inputs: [
          {
            internalType: "string",
            name: "brandName",
            type: "string",
          },
          {
            internalType: "string",
            name: "nafdac_no",
            type: "string",
          },
          {
            internalType: "string",
            name: "registration_no",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "yearOfRegistration",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "string",
            name: "state",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        name: "registerManufacturer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    address: productAddress as string,
  });

  useEffect(() => {
    if (!account) {
      router.push("/");
    }
  }, [account, router]);

  const handleRouting = () => {
    const route = REG_ROUTE[7];
    if (route) {
      router.push(route);
    }
  };

  // Validation rules
  // const validateField = (name: string, value: string | number): string => {
  //   switch (name) {
  //     case "yearOfRegistration":
  //       if (typeof value !== "number" || value < 1900 || value > new Date().getFullYear()) {
  //         return `Year must be between 1900 and ${new Date().getFullYear()}`;
  //       }
  //       return "";
  //     // Handle other fields similarly
  //   }
  // };

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: Number(value),
    }));
  };

  const handleStringInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Validate all fields
  // const validateForm = (): boolean => {
  //   const newErrors: Record<string, string> = {}; // Dynamically store errors
  //   let isValid = true;

  //   // Iterate over each field in the formData
  //   Object.keys(formData).forEach((key) => {
  //     const value = formData[key as keyof typeof formData]; // Get the value
  //     const error = validateField(key, value ? value.toString() : ""); // Ensure value is a string

  //     if (error) {
  //       newErrors[key] = error; // Add the error to the newErrors object
  //       isValid = false; // Mark form as invalid
  //     }
  //   });

  //   setErrors(newErrors); // Update the errors state
  //   return isValid; // Return whether the form is valid
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null; // Get the selected file

    if (file) {
      // Update formData with the selected file
      setFormData({ ...formData, image: file.name });
      setErrors({ ...errors, image: "" }); // Clear previous errors
    } else {
      // Set an error if no file is selected
      setErrors({ ...errors, image: "Please select an image to upload" });
    }
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
    return response.IpfsHash;
  };

  const handleTransaction = async () => {
    // if (!validateForm()) {
    //   throw new Error("Validation failed. Please correct the errors.");
    // }

    // Upload the image to IPFS
    const imageCID = await uploadImageToIPFS();
    const imageUrl = `https://ipfs.io/ipfs/${imageCID}`;
    console.log("IPFS: ", imageUrl)

    // Prepare the transaction
    // return prepareContractCall({
    //   contract: contract,
    //   method: "registerManufacturer",
    //   params: [
    //     formData.brandName,
    //     formData.nafdacNo,
    //     formData.registrationNo.toString(),
    //     BigInt(formData.yearOfRegistration),
    //     formData.location,
    //     formData.state,
    //     imageUrl,
    //   ],
    // });
  };

  // const handleClick = () => {
  //   router.push("/manufacturer/dashboard");
  // };

  return (
    <div className="grid">
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

            <form>
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
              </div>
              <div className="text-center mb-8">
                <label className="text-gray-600">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={`w-full ${errors.image ? "border-red-500" : ""}`}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">{errors.image}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-gray-600">Brand Name</label>
                    <Input
                      type="text"
                      name="brandName"
                      onChange={handleStringInputChange}
                      placeholder="Enter your brand name"
                      className={`w-full ${
                        errors.brandName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.brandName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.brandName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-600">Location</label>
                    <Input
                      type="text"
                      name="location"
                      placeholder="Enter location"
                      onChange={handleStringInputChange}
                      className={`w-full ${
                        errors.location ? "border-red-500" : ""
                      }`}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-600">Registration Number</label>
                    <Input
                      type="text"
                      name="registrationNo"
                      placeholder="Enter registration number"
                      onChange={handleStringInputChange}
                      className={`w-full ${
                        errors.registrationNo ? "border-red-500" : ""
                      }`}
                    />
                    {errors.registrationNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.registrationNo}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-gray-600">NAFDAC Number</label>
                    <Input
                      type="text"
                      name="nafdacNo"
                      placeholder="Enter NAFDAC number"
                      onChange={handleStringInputChange}
                      className={`w-full ${
                        errors.nafdacNo ? "border-red-500" : ""
                      }`}
                    />
                    {errors.nafdacNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.nafdacNo}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-600">
                      Year of Registration
                    </label>
                    <Input
                      type="number"
                      name="yearOfRegistration"
                      placeholder="Enter year of registration"
                      onChange={handleNumberInputChange}
                      className={`w-full ${
                        errors.yearOfRegistration ? "border-red-500" : ""
                      }`}
                    />
                    {errors.yearOfRegistration && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.yearOfRegistration}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-600">State</label>
                    <Input
                      type="text"
                      name="state"
                      placeholder="Enter state"
                      onChange={handleStringInputChange}
                      className={`w-full ${
                        errors.state ? "border-red-500" : ""
                      }`}
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.state}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  className="w-40 text-indigo-600 border-indigo-600"
                  onClick={handleTransaction}
                  
                >
                  Cancel
                </Button>

                <TransactionButton
                  transaction={() => prepareContractCall({
                    contract: contract,
                    method: "registerManufacturer",
                    params: [
                      formData.brandName, 
                      formData.nafdacNo,
                      formData.registrationNo,
                      BigInt(formData.yearOfRegistration),
                      formData.location,
                      formData.state,
                      formData.image
                    ]
                  })}
                  onError={(errors)=> {
                    console.log({errors})
                  }}
                  onTransactionConfirmed={(val) => {
                    alert("Registration successful!");
                    router.push("/manufacturer/dashboard");
                    setIsRegistered(true);
                  }}
                  disabled={!account}
                  className="p-3 bg-[#2711F1] text-white rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {!account ? "Connect Wallet" : "Submit"}
                </TransactionButton>

                {/* <TransactionButton
                  transaction={handleTransaction}
                  onTransactionConfirmed={() => {
                    alert("Registration successful!");
                    router.push("/manufacturer/dashboard");
                    setIsRegistered(true);
                  }}
                  disabled={!account}
                  className="p-3 bg-[#2711F1] text-white rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {!account ? "Connect Wallet" : "Submit"}
                </TransactionButton> */}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SetupForm;
