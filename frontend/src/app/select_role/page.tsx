"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SelectRole = () => {
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleRoleSelect = () => {
    if (role) {
      router.push(`/${role}`); // Redirect to the respective route
    } else {
      alert("Please select a role before proceeding.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col p-16 bg-white shadow-lg w-1/2 rounded-md">
        <p className="text-4xl mb-8 text-gray-700 text-center font-semibold">Select Your Role</p>
        <select
          className="p-3 border rounded mb-10 w-full"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="distributor">Distributor</option>
        </select>
        <button
          onClick={handleRoleSelect}
          className="p-3 bg-[#2711F1] text-white rounded hover:bg-blue-600 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SelectRole;
