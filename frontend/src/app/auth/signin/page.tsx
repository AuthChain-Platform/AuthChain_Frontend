import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';

const SignUpForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-50">
    
      <div className="absolute right-0 top-1/2 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3">
        <img 
          src="/ellipse.png" 
          alt="Decorative ellipse"
          className="w-full h-full object-contain"
        />
      </div>

      <Card className="w-full max-w-md relative z-10 bg-white">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold">Sign In</h1>
              <p className="text-gray-500 text-sm">Please Enter your Email and Password to continue</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm">Email address:</label>
                <Input 
                  type="email" 
                  placeholder="esteban_schiller@gmail.com"
                  className="w-full bg-gray-50"
                />
              </div>
        
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm">Password</label>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-700">
                    Forget Password?
                  </Link>
                </div>
                <Input 
                  type="password" 
                  className="w-full bg-gray-50"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label 
                  htmlFor="terms" 
                  className="text-sm text-gray-500"
                >
                  Remember Password
                </label>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Sign In
              </Button>
              <div className="text-center text-sm text-gray-500">
                or
              </div>
              <Button 
                variant="outline" 
                className="w-full"
              >
                Sign In with Wallet
              </Button>
              <div className="text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <Link href="#" className="text-indigo-600 hover:text-indigo-700">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpForm;