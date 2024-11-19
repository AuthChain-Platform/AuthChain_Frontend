import React from "react";
import { Button } from "@/components/ui/button";
import LandingPageii from "./components/LandingPageii";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


const page = () => {
 

  return (
 
    <div>
      <Navbar />
      <Hero />
      {/* <Button className="bg-[#2711F1] text-white rounded-[20px]">Default Button</Button> */}
      <LandingPageii />
      <Footer />
    </div>
  
  );
};

export default page;
