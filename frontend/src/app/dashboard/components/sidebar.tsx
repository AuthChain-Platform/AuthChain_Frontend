import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, label: 'Overview', href: '/dashboard' },
    { icon: <Package className="h-5 w-5" />, label: 'Product', href: '/dashboard/products', active: true },
    { icon: <PlusCircle className="h-5 w-5" />, label: 'Add Product', href: '/dashboard/add_product' },
    { icon: <BarChart className="h-5 w-5" />, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: <FileText className="h-5 w-5" />, label: 'Order Request', href: '/dashboard/orders' },
    { icon: <Users className="h-5 w-5" />, label: 'Staff', href: '/dashboard/staff' },
  ];

  const bottomMenuItems = [
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '/dashboard/settings' },
    { icon: <LogOut className="h-5 w-5" />, label: 'Logout', href: '/logout' },
  ];

  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed">
      <div className="h-16 flex items-center px-6">
        <div className="w-32 h-8 bg-blue-600 rounded-md"></div> {/* Wider blue logo */}
      </div>
      <div className="flex-1 flex flex-col justify-between py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                item.active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="space-y-1 px-3">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;