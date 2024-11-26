"use client";

import { FileObject, PinataSDK } from "pinata-web3";
import React, { FormEvent, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import { prepareContractCall } from "thirdweb";
import { getContract } from "thirdweb";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { client } from "@/constants/client";
import { lisk } from "@/constants/chain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/app/components/Navbar";



// Initialize Pinata client with API Key and Secret
const pinata = new PinataSDK({
  pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT!,
  pinataGateway: process.env.NEXT_PUBLIC_pinataGateway,
  pinataGatewayKey: process.env.NEXT_PUBLIC_pinataGatewayKey,
});

const SetupForm = () => {
  const router = useRouter();
  const account = useActiveAccount();

  const distributorContractAddress =
    "0x478d8fb8a3ca1fc75b191908514d879b8062ec74004ac4da2b2ecf30f7481ee0";

  const contract = getContract({
    client: client,
    chain: lisk,
    address: distributorContractAddress as string,
  });

  const [formData, setFormData] = useState({
    distributorName: "",
    companyAddress: "",
    registrationNumber: "",
    email: "",
    establishedYear: "",
    imageFile: "",
    state:"",
    imageObject: {} as File,
  });

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;


    if (name === "establishedYear") {
      const year = new Date(value).getFullYear().toString(); // Extract year from date string
      setFormData({ ...formData, [name]: year }); // Update state with only the year
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    console.log({file})
    setFormData({ ...formData, imageObject: file });
  }
};

  const uploadImageToIPFS = async () => {
    if (!formData.imageObject) {
      toast.error("Please select an image file");
      return null;
    }

    try {
      const added = await pinata.upload.file(formData.imageObject);
      console.log({added})
      return `https://coffee-blank-owl-368.mypinata.cloud/${added.IpfsHash}`;
    } catch (error) {
      toast.error("Error uploading image to IPFS");
      throw error;
    }
  };

  const {mutateAsync, data} = useSendTransaction()

  const transaction = prepareContractCall({
        contract,
        method: "function registerDistributor(string memory distributorName,string memory registration_no,uint256 yearOfRegistration,string memory location,string memory state,string memory image)",
        params: [
          formData.distributorName,
          formData.registrationNumber,
          BigInt("2499999999999"),
          formData.companyAddress,
          formData.state,
          formData.imageFile,
        ],
      });

  const handleSubmit = async () => {
    if (!account) {
      toast.error("Please connect your wallet first!");
      return;
    }

    try {
      const imageUrl = await uploadImageToIPFS();
      if (!imageUrl) return;

      setFormData({ ...formData, imageFile: imageUrl });

      mutateAsync(transaction);

      toast.success("Registration successful!");
      router.push("/distributor/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
       <Navbar />
      <ToastContainer />
      <div className="max-w-4xl mx-auto mt-8">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Complete Your Setup</h1>
            <span className="text-gray-500">2/2</span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                <label htmlFor="image-upload">
                  <Camera className="w-8 h-8 text-gray-400" />
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="text-center mb-8">
              <span className="text-indigo-600">Upload Photo</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <label className="text-gray-600">Distributor Name</label>
                <Input
                  type="text"
                  name="distributorName"
                  value={formData.distributorName}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                />
                <label className="text-gray-600">Company Address</label>
                <Input
                  type="text"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  placeholder="Enter your company Location"
                />
              </div>

              <div className="space-y-6">
                <label className="text-gray-600">Registration Number</label>
                <Input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your registration number(e.g 12345)"
                />
                <label className="text-gray-600">Established Year</label>
                <Input
                  type="date"
                  name="establishedYear"
                  value={formData.establishedYear}
                  onChange={handleDateInputChange}
                />
              </div>

              <div className="space-y-6">
                <label className="text-gray-600">State</label>
                <Input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="Enter your state"
                />
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button
                onClick={handleSubmit}
                // disabled={!formData.distributorName || !formData.email || !formData.companyAddress || !formData.registrationNumber || !account}
                className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Register
              </Button>

              {/* <Web3Button
                    contractAddress={distributorContractAddress}
                    action={async (contract) => {
                      const imageUrl = await uploadImageToIPFS();
                      if (!imageUrl) throw new Error("Image upload failed");

                      return contract.call("registerDistributor", [
                        formData.distributorName,
                        formData.registrationNumber,
                        BigInt("2499999999999"),
                        formData.companyAddress,
                        formData.state,
                        imageUrl,
                      ]);
                    }}
                    onError={(error) => toast.error(`Error: ${error.message}`)}
                    onSuccess={(result) => {
                      toast.success("Registration successful!");
                      console.log("Transaction Result: ", result);
                      router.push("/distributor/dashboard");
                    }}
                  >
                    Register via Wallet
                  </Web3Button> */}

            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SetupForm;
