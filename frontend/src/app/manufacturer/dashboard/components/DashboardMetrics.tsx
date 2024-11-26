'use client';
import { Box, Package, AlertCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ThirdwebSDK, TransactionError } from "@thirdweb-dev/sdk";
import { useState, useEffect } from "react";
import { ABI } from "@/constants/abi";



const metricData = [
  {
    title: "Total Products",
    value: "0",
    icon: Box,
    color: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    title: "Active orders",
    value: "10293",
    icon: Package,
    color: "bg-yellow-100",
    iconColor: "text-yellow-500"
  },
  {
    title: "Soon to Expire",
    value: "3000",
    icon: AlertCircle,
    color: "bg-green-100",
    iconColor: "text-green-500"
  },
  {
    title: "Total Pending",
    value: "2040",
    icon: Clock,
    color: "bg-red-100",
    iconColor: "text-red-500"
  }
];




const sdk = new ThirdwebSDK("lisk-sepolia-testnet");



export function DashboardMetrics() {
const [metrics, setmetrics] = useState(metricData)


const getProductMetrics = async ()=>{
  try {
    const contract =  await sdk.getContract("0x4456ce0eBadB36Ad298Ff19ce4aC18075c4407Cb", ABI)
  
    const res = await contract.call("getAllProducts", [])
    console.log({res})
    setmetrics((prev)=> {
      return prev.map((item)=> item.title === "Total Products"? {
        ...item,
        value: `${res?.length ?? 0}`
      }:item)
    })
  } catch (error) {
    console.error("Smart contract err: ", error)
  }
 
}
useEffect(() => {
getProductMetrics()

  
}, [])


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{metric.title}</p>
                <p className="text-2xl font-semibold mt-1">{metric.value}</p>
              </div>
              <div className={`p-3 rounded-full ${metric.color}`}>
                <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}