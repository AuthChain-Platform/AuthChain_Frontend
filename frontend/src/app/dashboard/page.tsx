
import { DashboardMetrics } from "./components/DashboardMetrics"
import { AnalyticsChart } from "./components/AnalyticsChart"
import { OrderRequests } from "./components/OrderRequest"
import { StaffManagement } from "./components/StaffManagement"
import PageHeader from './components/PageHeader';


export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" />
      <DashboardMetrics />
      <div className="space-y-6 mt-6">
        <AnalyticsChart />
        <OrderRequests />
        <StaffManagement />
      </div>
    </>
  )
}