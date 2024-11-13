import { Button } from "@/components/ui/button";
import React from "react";

const LandingPageii = () => {
  return (
    <div className="flex flex-col items-center p-16">
      {/* First Section */}
      <div className="flex flex-col items-center w-[89%] text-center mb-10">
        <h1 className="text-4xl font-medium text-[#2711F1] mb-8">
          Why Authentic Chain?
        </h1>
        <p className="text-lg text-gray-700">
          Authentic Chain is a blockchain-based product authentication system
          designed to combat counterfeiting and ensure product originality
          across multiple industries. The platform leverages Layer 2 blockchain
          technology (Optimism/Arbitrum) to provide a scalable, cost-effective
          solution for brands and consumers.
        </p>
      </div>


      <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-x-7 p-4 mb-5">
        <img
          src="/counterfeit.png"
          alt="Combat Counterfeiting"
          className="w-full lg:w-1/3 xl:w-1/2 h-auto lg:h-full object-cover rounded-lg mb-4 lg:mb-0"
        />
        <div className="flex flex-col text-left h-full">
          <p className="text-3xl text-[#2711F1] font-light mb-7">
            Combat Counterfeiting
          </p>
          <p className="text-xl text-gray-700 w-full lg:w-[90%] xl:w-[80%] mb-14">
            Implementing tamper-proof identification and creating a verifiable
            product history, we enable instant authenticity verification for
            secure and transparent product tracking. This ensures
            .....................
          </p>
          <Button className="bg-[#2711F1] text-white rounded-[20px] w-full lg:w-[20%] xl:w-[15%]">
            Read More
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-x-7 p-4">
        <div className="flex flex-col text-left h-full">
          <p className="text-3xl text-[#2711F1] font-light mb-7">
            Enhance Supply Chain Transparency
          </p>
          <p className="text-xl text-gray-700 w-full lg:w-[90%] xl:w-[80%] mb-14">
            Track the complete journey of each product from manufacture to
            consumer, recording every ownership transfer and monitoring
            conditions during.......................
          </p>
          <Button className="bg-[#2711F1] text-white rounded-[20px] w-full lg:w-[20%] xl:w-[15%]">
            Read More
          </Button>
        </div>
        <img
          src="/supply_chain.png"
          alt="Combat Counterfeiting"
          className="w-full lg:w-1/3 xl:w-1/2 h-auto lg:h-full object-cover rounded-lg mb-4 lg:mb-0"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-x-7 p-4 mb-5">
        <img
           src="/supply_chain.png"
          alt="Combat Counterfeiting"
          className="w-full lg:w-1/3 xl:w-1/2 h-auto lg:h-full object-cover rounded-lg mb-4 lg:mb-0"
        />
        <div className="flex flex-col text-left h-full">
          <p className="text-3xl text-[#2711F1] font-light mb-7">
           Improve User Experience
          </p>
          <p className="text-xl text-gray-700 w-full lg:w-[90%] xl:w-[80%] mb-14">
          Offer a simple, mobile-first authentication process with rapid response times for seamless product verification. This approach ensures that users can quickly confirm authenticity  ....................
          </p>
          <Button className="bg-[#2711F1] text-white rounded-[20px] w-full lg:w-[20%] xl:w-[15%]">
            Read More
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center w-[87%] text-center mb-10">
        <h1 className="text-4xl font-medium text-[#2711F1] mb-8">
        How it works
        </h1>
        <p className="text-lg text-gray-700">
        Authentic Chain addresses the critical need for reliable product authentication in the global market. By leveraging Layer 2 blockchain technology, the solution provides a scalable, cost-effective way to combat counterfeiting while building consumer trust and brand value. The platform leverages Layer 2 blockchain technology (Optimism/Arbitrum) to provide a scalable, cost-effective solution for brands and consumers
        </p>
      </div>
    </div>
  );
};

export default LandingPageii;
