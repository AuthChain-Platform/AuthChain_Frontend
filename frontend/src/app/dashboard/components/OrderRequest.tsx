import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";


const orders = [
  {
    id: "#001245",
    productName: "Premium Hand Sanitizer",
    quantity: 500,
    dateOfRequest: "September 12, 2024",
    requestedBy: "Distributor X Logistics",
    status: "Pending"
  },
  {
    id: "#001246",
    productName: "Organic Aloe Vera Lotion",
    quantity: 300,
    dateOfRequest: "September 13, 2024",
    requestedBy: "GreenLife Retailers",
    status: "Pending"
  },
  {
    id: "#001247",
    productName: "Vitamin C Tablets",
    quantity: 1000,
    dateOfRequest: "September 14, 2024",
    requestedBy: "WellnessHub Pharmacy",
    status: "Pending"
  }
];

export function OrderRequests() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Order Requests</CardTitle>
        <select className="text-sm border rounded-md px-2 py-1">
          <option>Duration</option>
        </select>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">Request ID</th>
                <th className="pb-4">Product Name</th>
                <th className="pb-4">Quantity</th>
                <th className="pb-4">Date of Request</th>
                <th className="pb-4">Requested By</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8" />
                      {order.id}
                    </div>
                  </td>
                  <td className="py-4">{order.productName}</td>
                  <td className="py-4">{order.quantity}</td>
                  <td className="py-4">{order.dateOfRequest}</td>
                  <td className="py-4">{order.requestedBy}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}