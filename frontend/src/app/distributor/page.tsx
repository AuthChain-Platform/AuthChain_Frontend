'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const distributer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/distributor/dashboard");
  };

  return (
    <div>
      <p>complete distributer set up</p>
      <Button
        variant="outline"
        className="bg-white text-lg px-8 py-6 rounded-3xl"
        onClick={handleClick}
      >
        Submit Button
      </Button>
    </div>
  );
};

export default distributer;
