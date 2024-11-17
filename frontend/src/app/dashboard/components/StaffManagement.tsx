import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";

const staff = [
  {
    name: "John Carter",
    role: "Senior Product Manager",
    dateAdded: "12.09.2019 - 12:53 PM",
    lastActive: "12.09.2019 - 12:53 PM"
  },
  {
    name: "Emily Nguyen",
    role: "Inventory Specialist",
    dateAdded: "12.09.2019 - 12:53 PM",
    lastActive: "12.09.2019 - 12:53 PM"
  },
  {
    name: "Mark Peterson",
    role: "Logistics Coordinator",
    dateAdded: "12.09.2019 - 12:53 PM",
    lastActive: "12.09.2019 - 12:53 PM"
  }
];

export function StaffManagement() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Staff Management</CardTitle>
        <button className="text-sm px-3 py-1 border rounded-md">
          Add Staff
        </button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">Staff Name</th>
                <th className="pb-4">Role</th>
                <th className="pb-4">Date Added</th>
                <th className="pb-4">Last Active</th>
                <th className="pb-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((member) => (
                <tr key={member.name} className="border-t">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8" />
                      {member.name}
                    </div>
                  </td>
                  <td className="py-4">{member.role}</td>
                  <td className="py-4">{member.dateAdded}</td>
                  <td className="py-4">{member.lastActive}</td>
                  <td className="py-4">
                    <button>
                      <MoreVertical className="w-5 h-5 text-gray-500" />
                    </button>
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
