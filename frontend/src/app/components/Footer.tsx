import React from "react";

const Footer = () => {
  return (
    <div className="py-8">
      <div className="flex flex-row space-x-6">
        <div className="w-[49%] flex flex-col space-y-4 px-8">
          <img src="/ftlogo.png" alt="footer logo" className="w-3/4 " />

          <p className="w-full text-l">
            Authentic Chain addresses the critical need for reliable product
            authentication in the global market
          </p>
        </div>

        <div className="w-[60%] flex flex-row justify-evenly">
          <div className="flex flex-col space-y-5">
            <p className="text-lg font-medium">COMPANY</p>
            <p>About</p>
            <p>Contacts</p>
            <p>FAQs</p>
          </div>

          <div className="flex flex-col space-y-5">
            <p className="text-lg font-medium">LEGAL</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>

          <div className="flex flex-col space-y-5">
            <p className="text-lg font-medium">EXPLORE</p>
            <p>Platform</p>
            <p>Solutions</p>
            <p>Manufacturer</p>
            <p>Retailer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
