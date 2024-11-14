import { Button } from "@/components/ui/button";
import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { User } from "lucide-react";

const LandingPageii = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-x-12 p-4 mb-5">
          <img
            src="/counterfeit.png"
            alt="Combat Counterfeiting"
            className="w-full lg:w-1/3 xl:w-1/2 h-auto lg:h-full object-cover rounded-lg mb-4 lg:mb-0"
          />
          <div className="flex flex-col text-left justify-center">
            <p className="text-3xl font-semibold mb-7 w-[90%]">
              Bolstering Product Authenticity and Consumer Trust
            </p>
            <p className="text-l text-gray-700 w-full lg:w-[85%] xl:w-[80%] mb-14">
              By implementing robust anti-counterfeiting measures, we safeguard
              your brand reputation and protect consumers from counterfeit
              goods.
            </p>
            <Button className="bg-white text-[#4880FF] rounded-[20px] w-full lg:w-[20%] xl:w-[15%] border border-[#4880FF]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className=" p-16 bg-[#E8E8E8]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-x-7 py-5 p-4">
          <div className="flex flex-col text-left justify-center">
            <p className="text-3xl font-semibold mb-5 ">
              Harness the Power of
              <br />
              Data-Driven Supply Chain Insights
            </p>
            <p className="text-l text-gray-700 w-full lg:w-[98%] xl:w-[85%] mb-8">
              Collect real-time data on product movement and condition to make
              informed decisions and optimize operations.
            </p>
            <Button className="bg-[#E8E8E8] text-[#4880FF] rounded-[20px] w-full lg:w-[20%] xl:w-[15%] border border-[#4880FF]">
              Get Started
            </Button>
          </div>
          <img
            src="/supply_chain.png"
            alt="Combat Counterfeiting"
            className="w-full lg:w-1/3 xl:w-1/2 h-auto lg:h-full object-cover rounded-lg mb-4 lg:mb-0"
          />
        </div>
      </div>
      <div className="p-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-x-14 p-4 mb-5">
          <img
            src="/supply_chain.png"
            alt="Combat Counterfeiting"
            className="w-full lg:w-1/3 xl:w-1/2 h-auto lg:h-full object-cover rounded-lg mb-4 lg:mb-0"
          />
          <div className="flex flex-col text-left justify-center">
            <p className="text-3xl font-semibold mb-6">
              Seamless Product <br /> Verification Simplified
            </p>
            <p className="text-l text-gray-700 w-full lg:w-[80%] xl:w-[80%] mb-8">
              Our user-friendly platform offers instant authentication, making
              it easy to verify product authenticity on the go.
            </p>
            <Button className="bg-white text-[#4880FF] rounded-[20px] w-full lg:w-[30%] xl:w-[15%] border border-[#4880FF]">
              Verify Product
            </Button>
          </div>
        </div>
      </div>

      <div className="p-16 bg-[#E8E8E8]">
        <div className="flex flex-col items-center w-[89%] text-center mb-10">
          <h1 className="text-4xl font-medium mb-6">How It Works</h1>
          <p className="text-l text-gray-700 w-[78%] mb-10">
            Our user-friendly platform simplifies product authentication. With
            just a few clicks, you can verify the authenticity of any product,
            anytime, anywhere.
          </p>
          <div className="flex flex-row">
            <div className="bg-[#F3F3F3] flex flex-col items-center py-5">
              <UserGroupIcon className="h-10 w-10 rounded-[10px] p-1 bg-[#CDDDE8] text-[#007BFF] mb-2" />
              <p className=" text-xl font-semibold mb-3">
                Brands Register <br /> Products
              </p>
              <p className="text-l w-[70%]">
                Securely register your products on our platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center flex flex-col items-center justify-center text-center p-20"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        <p className="text-3xl font-semibold text-white mb-4">
          Start your Journey with Authentic Chain today
        </p>
        <p className="text-l w-[77%] font-light text-white">
          If you have any questions, requests, or are interested in working with
          us, please let us know what your needs are, and a team member will
          reach out to you!
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
  );
};

export default LandingPageii;
