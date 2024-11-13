import React from "react";
import { Button } from "@/components/ui/button";
import LandingPageii from "./components/LandingPageii";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-gray-900">Landing Page Section 1</h1>
        <p className="text-lg text-gray-700">Some descriptive text here.</p>
      <Button className="bg-[#2711F1] text-white rounded-[20px]">Default Button</Button>
      <LandingPageii />
      <Footer />
    </div>
  );
};

export default page;
