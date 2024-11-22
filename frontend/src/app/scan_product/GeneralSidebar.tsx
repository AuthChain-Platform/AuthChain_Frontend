import React from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, BarChart, HelpCircle } from 'lucide-react';

const GeneralSidebar = () => {
  return (
    <aside className="bg-white w-64 min-h-screen p-6 border-r border-gray-200 shadow-lg">
      <nav>
        <ul className="space-y-6">
          <li>
            <Link href="/scan_product" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
              <Search className="w-5 h-5" />
              <span className="font-medium">Verify Product</span>
            </Link>
          </li>
          <li>
            <Link href="/authenticity" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-medium">Authenticity Guide</span>
            </Link>
          </li>
          <li>
            <Link href="/statistics" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
              <BarChart className="w-5 h-5" />
              <span className="font-medium">Verification Statistics</span>
            </Link>
          </li>
          <li>
            <Link href="/faq" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
              <HelpCircle className="w-5 h-5" />
              <span className="font-medium">FAQ</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-12 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-semibold text-blue-800 mb-2">Need Help?</h3>
        <p className="text-sm text-blue-600">
          If you're having trouble verifying a product, please contact our support team.
        </p>
        <Link href="/contact" className="mt-2 inline-block text-sm font-medium text-blue-600 hover:text-blue-800">
          Contact Support
        </Link>
      </div>
    </aside>
  );
};

export default GeneralSidebar;
