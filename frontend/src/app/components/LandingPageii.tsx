import { Button } from "@/components/ui/button";
import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { Leaf } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { StarIcon } from "@heroicons/react/24/solid";

const LandingPageii = () => {
  return (
    <div>
      <div className="bg-[#F5F7FA]">
        <div className="flex flex-row space-x-12 xl:space-x-36 py-10 items-center justify-center">
          <div className="flex flex-col">
            <p className="text-3xl font-semibold mb-2">
              Optimizing Supply Chains <br />{" "}
              <span className="text-3xl text-[#4880FF]">
                {" "}
                for a Sustainable Future
              </span>{" "}
            </p>
            <p className="text-sm text-[#18191F]">Driving Sustainability Through Supply Chain Innovation</p>
          </div>
          <div className="flex flex-row space-x-16">
            <div className="flex flex-col space-y-10">
              <div className="flex flex-row items-center space-x-2">
                <Leaf className="h-10 w-10 text-[#007BFF] " />
                <div className="flex flex-col">
                  <p className="text-2xl font-semibold mb-1">70%</p>
                  <p className="text-md text-[#717171]">Sustainability</p>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <ShieldCheck className="h-12 w-12 text-[#007BFF] " />
                <div className="flex flex-col">
                  <p className="text-3xl font-semibold mb-1">95%</p>
                  <p className="text-md text-[#717171]">Customer Trust</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-10">
              <div className="flex flex-row items-center space-x-3">
                <StarIcon className="h-12 w-12 text-[#007BFF] " />
                <div className="flex flex-col">
                  <p className="text-3xl font-semibold mb-1">4.9/5</p>
                  <p className="text-md text-[#717171]">User Satisfaction</p>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <BadgeCheck  className="h-12 w-12 text-[#007BFF] " />
                <div className="flex flex-col">
                  <p className="text-3xl font-semibold mb-1">99.8%</p>
                  <p className="text-md text-[#717171]">Authentication Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

      <div className="p-14 bg-[#E8E8E8]">
        <div className="flex flex-col items-center  text-center mb-10">
          <h1 className="text-4xl font-semibold mb-6">How It Works</h1>
          <p className="text-l text-gray-700 w-[68%] mb-14">
            Our user-friendly platform simplifies product authentication. With
            just a few clicks, you can verify the authenticity of any product,
            anytime, anywhere.
          </p>
          <div className="flex flex-row items-center space-x-14">
            <div className="bg-[#F3F3F3] flex flex-col w-[36%] items-center py-5 h-56 rounded-[8px]">
              <UserGroupIcon className="h-10 w-10 rounded-[10px] p-1 bg-[#CDDDE8] text-[#007BFF] mb-5" />
              <p className=" text-xl font-semibold mb-3">
                Brands Register <br /> Products
              </p>
              <p className="text-l w-[95%] text-[#343434]">
                Securely register your products on our platform.
              </p>
            </div>
            <div className="bg-[#F3F3F3] flex flex-col w-[36%] items-center py-5 h-56 rounded-[8px]">
              <BuildingOffice2Icon className="h-10 w-10 rounded-[10px] p-1 bg-[#CDDDE8] text-[#007BFF] mb-5" />
              <p className=" text-xl font-semibold mb-3">Record Product Data</p>
              <p className="text-l w-[95%] text-[#343434]">
                Create an immutable record of your product's journey.
              </p>
            </div>
            <div className="bg-[#F3F3F3] flex flex-col w-[36%] items-center py-5 h-56 rounded-[8px]">
              <CheckCircleIcon className="h-10 w-10 rounded-[10px] p-1 bg-[#CDDDE8] text-[#007BFF] mb-5" />
              <p className=" text-xl font-semibold mb-3">
                Instant Verification
              </p>
              <p className="text-l w-[95%] text-[#343434]">
                Scan the QR code to confirm authenticity in seconds
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-fit bg-center flex flex-col items-center justify-center text-center py-24 px-20 "
        style={{ backgroundImage: "url('/image.png')" }}
      >
        <p className="text-3xl font-semibold text-white mb-4">
          Ready to Elevate Your <br /> Brand’s Security
        </p>
        <p className="text-l w-[77%] font-light text-white mb-10">
          Join the network of forward-thinking brands <br />
          using Authentic Chain
        </p>
        <Button className="bg-white text-black rounded-[20px] w-full lg:w-[18%] xl:w-[15%] ">
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default LandingPageii;
