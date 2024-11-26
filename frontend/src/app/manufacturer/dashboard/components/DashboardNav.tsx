
import React from "react";
import { Menu, Search, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "@/constants/client";
import { defineChain } from "thirdweb";
import {lisk} from "@/constants/chain";

const DashboardHeader = () => {
  return (
    <div className="h-16 border-b border-gray-200 bg-white px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Menu className="h-5 w-5 text-gray-500" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search product name, batch ID and status"
            className="h-9 w-[280px] rounded-lg border border-gray-200 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/avater.png" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <div className="flex items-center">
    
        <ConnectButton
            client={client} 
            chain={lisk}
            appMetadata={{
              name: "Authentic Chain",
              url: "https://",
            }}
            connectButton={{
              label: "Sign In",
              className: "bg-blue text-white rounded-[20px] px-4 py-2",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;