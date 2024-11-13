import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col items-start space-y-4">
            <img src="/ftlogo.png" alt="footer logo" className="w-32 h-auto" />
            <p className="text-sm">
              Authentic Chain addresses the critical need for reliable product
              authentication in the global market.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold">COMPANY</p>
              <p>About</p>
              <p>Contacts</p>
              <p>FAQs</p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold">LEGAL</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-lg font-semibold">EXPLORE</p>
              <p>Platform</p>
              <p>Solutions</p>
              <p>Manufacturer</p>
              <p>Retailer</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Authentic Chain. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
