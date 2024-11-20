"use client";

import React, { useEffect } from "react";
import { Scan } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "@/constants/client";
import { defineChain } from "thirdweb";
import { createThirdwebClient } from "thirdweb";

const Navbar = () => {
  const router = useRouter();
  const activeAccount = useActiveAccount();
  

  const lisk = defineChain({
    id: 4202,
    rpc: "https://4202.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
  });


  const handleClick = () => {
    router.push("/scan_product");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center">
        <div className="relative w-32 h-12">
          <Image
            src="/logo.jpeg"
            alt="Authentic Chain Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-xl font-semibold">AUTHENTIC CHAIN</span>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          HOME
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          ABOUT US
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          CONTACT US
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          className="hidden md:inline-flex items-center border-0"
          onClick={handleClick}
        >
          <Scan className="h-5 w-5" />
          <span>Quick Scan</span>
        </Button>

       
        
          <ConnectButton
            client={client} 
            chain={lisk}
            appMetadata={{
              name: "Authentic Chain",
              url: "https://",
            }}
            connectButton={{
              label: "Sign In",
              className: "bg-blue text-white rounded-[20px] px-4 py-2",
            }}
          />
        
      </div>
    </nav>
  );
};

export default Navbar;