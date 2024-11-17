import { Box, Package, AlertCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Total Products",
    value: "40,689",
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

export function DashboardMetrics() {
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