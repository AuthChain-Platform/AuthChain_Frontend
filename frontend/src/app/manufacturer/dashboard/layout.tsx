"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  BarChart,
  FileText,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import DashboardHeader from "./components/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Overview",
      href: "/manufacturer/dashboard",
    },
    {
      icon: <Package className="h-5 w-5" />,
      label: "Product",
      href: "/manufacturer/dashboard/products",
    },
    {
      icon: <PlusCircle className="h-5 w-5" />,
      label: "Add Product",
      href: "/manufacturer/dashboard/add_product",
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      label: "Analytics",
      href: "/manufacturer/dashboard/analytics",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Order Request",
      href: "/manufacturer/dashboard/orders",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Staff",
      href: "/manufacturer/dashboard/staff",
    },
  ];

  const bottomMenuItems = [
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      href: "/manufacturer/dashboard/settings",
    },
    { icon: <LogOut className="h-5 w-5" />, label: "Logout", href: "/logout" },
  ];

  return (
    <div className="h-screen flex bg-white">

      <aside className="w-1/4 xl:w-2/12 bg-white text-gray-800 flex flex-col justify-between shadow-md">
        <div className="p-6 pt-12 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                pathname === item.href
                  ? "bg-[#3D28F3] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-gray-200">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>

     
      <div className="flex-1 flex flex-col">
    
        <DashboardHeader />
        
          {/* Nothing to do */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
