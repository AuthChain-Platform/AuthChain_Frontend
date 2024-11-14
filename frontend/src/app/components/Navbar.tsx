import React from 'react';
import {  Scan } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center">
        <div className="relative w-32 h-12">
          <Image 
            src="/logo.jpeg" 
            alt="Authentic Chain Logo"
            fill
            className="object-contain "
            priority
          />
        </div>
        <span className="text-xl font-semibold">AUTHENTIC CHAIN</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">HOME</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">ABOUT US</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">CONTACT US</a>
      </div>
      
      <div className="flex items-center space-x-4">
      <Button variant="outline" className="hidden md:inline-flex items-center border-0">
  <Scan className="h-5 w-5" />
  <span>Quick Scan</span>
</Button>


        <Button className="bg-blue-600 hover:bg-blue-700 rounded-3xl">
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;