import React from "react";
import { Button } from "@/components/ui/button";
import LandingPageii from "./components/LandingPageii";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ThirdwebProvider } from "thirdweb/react";
import { client } from "@/constants/client";
// import { Lisk } from "@thirdweb/sepolia";

const page = () => {
  return (
    <div>
      <ThirdwebProvider>
        <Navbar />
        <Hero />
      {/* <Button className="bg-[#2711F1] text-white rounded-[20px]">Default Button</Button> */}
      <LandingPageii />
      <Footer />
      </ThirdwebProvider>
    </div>
  );
};

export default page;
