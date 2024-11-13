import { Button } from "@/components/ui/button";
import React from "react";

const LandingPageii = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-16">
       
        <div className="flex flex-col items-center w-[89%] text-center mb-10">
          <h1 className="text-4xl font-medium text-[#2711F1] mb-8">
            Why Authentic Chain?
          </h1>
          <p className="text-lg text-gray-700">
            Authentic Chain is a blockchain-based product authentication system
            designed to combat counterfeiting and ensure product originality
            across multiple industries. The platform leverages Layer 2
            blockchain technology (Optimism/Arbitrum) to provide a scalable,
            cost-effective solution for brands and consumers.
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
              Offer a simple, mobile-first authentication process with rapid
              response times for seamless product verification. This approach
              ensures that users can quickly confirm authenticity
              ....................
            </p>
            <Button className="bg-[#2711F1] text-white rounded-[20px] w-full lg:w-[20%] xl:w-[15%]">
              Read More
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center w-[87%] text-center mb-3">
          <h1 className="text-4xl font-medium text-[#2711F1] mb-8">
            How it works
          </h1>
          <p className="text-lg text-gray-700">
            Authentic Chain addresses the critical need for reliable product
            authentication in the global market. By leveraging Layer 2
            blockchain technology, the solution provides a scalable,
            cost-effective way to combat counterfeiting while building consumer
            trust and brand value. The platform leverages Layer 2 blockchain
            technology (Optimism/Arbitrum) to provide a scalable, cost-effective
            solution for brands and consumers
          </p>
        </div>
      </div>

      <div className="w-full bg-[#2711F1] py-5">
        <div className="flex flex-col items-center w-[74%] text-center mx-auto">
          <p className="text-2xl font-semibold text-white mb-8">
            Just want to Verify the Authenticity of a Product? Click on the Scan
            Button below
          </p>
          <Button className="bg-white font-semibold text-[#2711F1] rounded-[20px] w-full lg:w-[20%] xl:w-[15%]">
            Scan Here
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center p-16 mt-2">
        <div
          className="bg-cover bg-center rounded-[20px] flex flex-col items-center justify-center text-center p-10"
          style={{ backgroundImage: "url('/image.png')" }}
        >
          <p className="text-3xl font-semibold text-white mb-4">
            Start your Journey with Authentic Chain today
          </p>
          <p className="text-l w-[77%] font-light text-white">
            If you have any questions, requests, or are interested in working
            with us, please let us know what your needs are, and a team member
            will reach out to you!
          </p>
          <div className="flex flex-row space-x-4 mt-8">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 border border-gray-300 rounded-[15px] w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-[#2711F1] font-semibold text-white rounded-[20px] w-full lg:w-[40%] xl:w-[15%]">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageii;
