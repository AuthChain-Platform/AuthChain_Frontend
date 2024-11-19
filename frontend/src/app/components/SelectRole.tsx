"Use Client"

import React, { useState } from "react";

const SelectRole = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col p-10 bg-white shadow-lg rounded-lg">
        <p className="text-2xl font-semibold mb-8 text-gray-800">Select Your Role</p>
        <select
          className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedRole}
          onChange={handleChange}
        >
          <option value="" disabled>
            Choose a role
          </option>
          <option value={2}>Manufacturer</option>
          <option value={4}>Distributor</option>
        </select>
        {selectedRole && (
          <p className="mt-4 text-gray-600">
            You selected: <span className="font-medium">{selectedRole}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectRole;
