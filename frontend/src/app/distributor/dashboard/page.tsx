import { AnalyticsChart } from "@/app/manufacturer/dashboard/components/AnalyticsChart";

import { OrderRequests } from "@/app/manufacturer/dashboard/components/OrderRequest";
import   PageHeader  from "./components/PageHeader"
import { DashbordCards } from "./components/DashboardCards";
import { Notifications } from "./components/Notifications";


export default function DashboardPage() {
  return (
    <>
       <PageHeader title="Dashboard" />
       <DashbordCards />
      <div className="space-y-6 mt-6">   
        <OrderRequests/>
        <AnalyticsChart />
        <Notifications />
    
      </div>
    </>
  )
}