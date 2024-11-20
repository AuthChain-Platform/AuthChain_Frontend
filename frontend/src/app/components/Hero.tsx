'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";


const Hero = () => {
  const router = useRouter();
  const account = useActiveAccount();

  const handleClick = () => {
    router.push("/scan_product");
  };

  const handleGetStarted = () => {
    if (!account) {
      alert("Please connect your wallet first!");
    } else {
      router.push("/select_role");
    }
  };

  return (
    <div className="relative h-[600px]">
      <Image
        src="/hero-bg.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/60" />

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Scalable, cost-effective way to combat counterfeiting
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-[90%] md:max-w-[80%] leading-relaxed">
            Authentic Chain delivers reliable product authentication with scalable,
            cost-effective Layer 2 blockchain technology to combat counterfeiting
            and build consumer trust.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-3xl"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="bg-white text-lg px-8 py-6 rounded-3xl"
              onClick={handleClick}
            >
              Scan Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
