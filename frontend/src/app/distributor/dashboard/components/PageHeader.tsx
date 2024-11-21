
import React from "react";


const PageHeader = ({title}: { title: string }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      
    </div>
  );
};

export default PageHeader;