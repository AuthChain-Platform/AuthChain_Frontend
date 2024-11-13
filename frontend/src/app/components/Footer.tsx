import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <img src="/ftlogo.png" alt="footer logo" />
          <p>
            Authentic Chain addresses the critical need for reliable product
            authentication in the global market
          </p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-lg">COMPANY</p>
            <p>About</p>
            <p>Contacts</p>
            <p>FAQs</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg">LEGAL</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg">EXPLORE</p>
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
